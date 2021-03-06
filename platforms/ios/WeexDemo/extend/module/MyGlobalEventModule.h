//
//  MyGlobalEventModule.h
//  WeexDemo
//
//  Created by ZhaoBin on 2018/3/10.
//  Copyright © 2018年 taobao. All rights reserved.
//

#ifndef MyGlobalEventModule_h
#define MyGlobalEventModule_h

#import <Foundation/Foundation.h>
#import <WeexSDK/WXEventModuleProtocol.h>
#import <WeexSDK/WXModuleProtocol.h>

@interface MyGlobalEventModule : NSObject <WXEventModuleProtocol, WXModuleProtocol>

@end

#endif /* MyGlobalEventModule_h */
