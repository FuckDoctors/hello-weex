//
//  MyGlobalEventModule.m
//  WeexDemo
//
//  Created by zhaobc on 2018/3/8.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MyGlobalEventModule.h"
#import "WXDemoViewController.h"
#import <WeexSDK/WeexSDK.h>

@implementation MyGlobalEventModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:))

WX_EXPORT_METHOD(@selector(fireGlobalEvent:params:callback:))

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


/**
 a test method for macaca case, you can fire globalEvent when download finish、device shaked and so on.
 @param event event name
 */
- (void)fireGlobalEvent:(NSString *)event params:(NSDictionary *)params callback:(WXKeepAliveCallback)callback
{
    // 直接调用下面这个方法，实现不了页面间传值的问题。没有触发addEventListener的callback
    // 更多内容参考这个：https://segmentfault.com/a/1190000009885105
//    [weexInstance fireGlobalEvent:event params:params];
    if (!params){
        params = [NSDictionary dictionary];
    }
    NSDictionary * userInfo = @{
                                @"param":params
                                };
    [[NSNotificationCenter defaultCenter] postNotificationName:event object:self userInfo:userInfo];
    
    // 回调
    if (callback) {
        NSDictionary * result = @{@"ok": @true};
        callback(result,false);
    }
}

@end
