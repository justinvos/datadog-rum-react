console.log("hi from service worker");

self.addEventListener("fetch", function (event) {
  const url = event.request.url;
  console.log("Fetching:", url);
  
  event.respondWith(
    fetch(event.request).then(function(response) {
      console.log("Response headers for", url, ":");
      for (let [key, value] of response.headers) {
        console.log(`  ${key}: ${value}`);
      }
      return response;
    }).catch(function(error) {
      console.error("Fetch failed for", url, ":", error);
      throw error;
    })
  );
});
