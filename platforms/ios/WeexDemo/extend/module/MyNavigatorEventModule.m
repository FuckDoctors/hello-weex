//
//  MyNavigatorEventModule.m
//  WeexDemo
//
//  Created by zhaobc on 2018/3/23.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MyNavigatorEventModule.h"
#import "WXDemoViewController.h"
#import <WeexSDK/WeexSDK.h>

@implementation MyNavigatorEventModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:))
WX_EXPORT_METHOD(@selector(removeLast:))
WX_EXPORT_METHOD(@selector(removeBefore:))

- (void)openURL:(NSString *)url
{
    NSString *newURL = url;
    if ([url hasPrefix:@"//"]) {
        newURL = [NSString stringWithFormat:@"http:%@", url];
    } else if (![url hasPrefix:@"http"]) {
        // relative path
        newURL = [NSURL URLWithString:url relativeToURL:weexInstance.scriptURL].absoluteString;
    }
    
    UIViewController *controller = [[WXDemoViewController alloc] init];
    ((WXDemoViewController *)controller).url = [NSURL URLWithString:newURL];
    
    [[weexInstance.viewController navigationController] pushViewController:controller animated:YES];
}

- (void)removeLast:(WXModuleKeepAliveCallback)callback
{
    [weexInstance.viewController.navigationController.viewControllers.lastObject removeFromParentViewController];
//    NSMutableArray *navigationArray = [[NSMutableArray alloc] initWithArray: weexInstance.viewController.navigationController.viewControllers];
//    [navigationArray removeObject: navigationArray.lastObject];
//    weexInstance.viewController.navigationController.viewControllers = navigationArray;
    
    // 回调
    if (callback) {
        NSDictionary * result = @{@"ok": @true};
        callback(result,false);
    }
}

- (void)removeBefore:(WXModuleKeepAliveCallback)callback
{
    NSMutableArray *navigationArray = [[NSMutableArray alloc] initWithArray: weexInstance.viewController.navigationController.viewControllers];
    // 先把当前页面push进来了，所以要删除倒数第二个
    [navigationArray removeObjectAtIndex: [navigationArray count] - 2];
    weexInstance.viewController.navigationController.viewControllers = navigationArray;
    
    // 回调
    if (callback) {
        NSDictionary * result = @{@"ok": @true};
        callback(result,false);
    }
}

@end
