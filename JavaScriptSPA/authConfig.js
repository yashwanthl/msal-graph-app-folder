 
  // Config object to be passed to Msal on creation
  var msalConfig = {
    auth: {
        // clientId: "8876e65f-162c-4a66-b642-ac15c2718108",
        // authority: "https://login.microsoftonline.com/3cbcc3d3-094d-4006-9849-0d11d61f484d",
        clientId: "76ff8956-aec7-4448-a11a-f5c718fd9cd5",
        authority: "https://login.microsoftonline.com/3cbcc3d3-094d-4006-9849-0d11d61f484d",
        redirectURI: "http://localhost:3000/"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

  
  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read", "Files.ReadWrite", "Files.ReadWrite.AppFolder"],
  };
