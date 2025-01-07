# BizIntelApi.AuthenticationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthLoginPost**](AuthenticationApi.md#apiAuthLoginPost) | **POST** /api/auth/login | Log in an existing user
[**apiAuthSignupPost**](AuthenticationApi.md#apiAuthSignupPost) | **POST** /api/auth/signup | Sign up a new user



## apiAuthLoginPost

> ApiAuthLoginPost200Response apiAuthLoginPost(loginRequest)

Log in an existing user

### Example

```javascript
import BizIntelApi from 'biz_intel_api';
let defaultClient = BizIntelApi.ApiClient.instance;
// Configure HTTP basic authorization: basicScheme
let basicScheme = defaultClient.authentications['basicScheme'];
basicScheme.username = 'YOUR USERNAME';
basicScheme.password = 'YOUR PASSWORD';

let apiInstance = new BizIntelApi.AuthenticationApi();
let loginRequest = new BizIntelApi.LoginRequest(); // LoginRequest | 
apiInstance.apiAuthLoginPost(loginRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**ApiAuthLoginPost200Response**](ApiAuthLoginPost200Response.md)

### Authorization

[basicScheme](../README.md#basicScheme)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiAuthSignupPost

> ApiSuccess apiAuthSignupPost(signUpRequest)

Sign up a new user

### Example

```javascript
import BizIntelApi from 'biz_intel_api';
let defaultClient = BizIntelApi.ApiClient.instance;
// Configure HTTP basic authorization: basicScheme
let basicScheme = defaultClient.authentications['basicScheme'];
basicScheme.username = 'YOUR USERNAME';
basicScheme.password = 'YOUR PASSWORD';

let apiInstance = new BizIntelApi.AuthenticationApi();
let signUpRequest = new BizIntelApi.SignUpRequest(); // SignUpRequest | 
apiInstance.apiAuthSignupPost(signUpRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signUpRequest** | [**SignUpRequest**](SignUpRequest.md)|  | 

### Return type

[**ApiSuccess**](ApiSuccess.md)

### Authorization

[basicScheme](../README.md#basicScheme)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

