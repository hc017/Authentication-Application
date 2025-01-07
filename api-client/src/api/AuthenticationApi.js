/**
 * BizIntel API
 * API documentation for BizIntel
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiAuthLoginPost200Response from '../model/ApiAuthLoginPost200Response';
import ApiError from '../model/ApiError';
import ApiSuccess from '../model/ApiSuccess';
import LoginRequest from '../model/LoginRequest';
import SignUpRequest from '../model/SignUpRequest';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version v1.0.0
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiAuthLoginPost operation.
     * @callback module:api/AuthenticationApi~apiAuthLoginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiAuthLoginPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log in an existing user
     * @param {module:model/LoginRequest} loginRequest 
     * @param {module:api/AuthenticationApi~apiAuthLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiAuthLoginPost200Response}
     */
    apiAuthLoginPost(loginRequest, callback) {
      let postBody = loginRequest;
      // verify the required parameter 'loginRequest' is set
      if (loginRequest === undefined || loginRequest === null) {
        throw new Error("Missing the required parameter 'loginRequest' when calling apiAuthLoginPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicScheme'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiAuthLoginPost200Response;
      return this.apiClient.callApi(
        '/api/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiAuthSignupPost operation.
     * @callback module:api/AuthenticationApi~apiAuthSignupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign up a new user
     * @param {module:model/SignUpRequest} signUpRequest 
     * @param {module:api/AuthenticationApi~apiAuthSignupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSuccess}
     */
    apiAuthSignupPost(signUpRequest, callback) {
      let postBody = signUpRequest;
      // verify the required parameter 'signUpRequest' is set
      if (signUpRequest === undefined || signUpRequest === null) {
        throw new Error("Missing the required parameter 'signUpRequest' when calling apiAuthSignupPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicScheme'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiSuccess;
      return this.apiClient.callApi(
        '/api/auth/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
