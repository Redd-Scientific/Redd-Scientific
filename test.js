<script src="http://www.google.com/jsapi" type="text/javascript"></script>  
<script type="text/javascript">  
google.load('gdata', '1.x');  
google.setOnLoadCallback(initialize);  
  
function initialize() {  
  var scope = 'http://docs.google.com/feeds/';  
  if (google.accounts.user.checkLogin(scope)) {     
    var service = new google.gdata.client.GoogleService('writely', 'DocList-App-v1.0');   
    service.getFeed(scope + 'documents/private/full/', handleFeed, handleError);  
  } else {  
    var token = google.accounts.user.login(scope); // can ignore returned token  
  }  
};  
  
var handleFeed = function(response) {  
  var entries = response.feed.entry;  
  if (!entries.length) {  
    alert('You have no entries!');  
    return;  
  }  
  var html = [];  
  for (var i = 0, entry; entry = entries[i]; i++) {  
    var title = entry.title.$t;  
    html.push('<li>' + title + '</li>');  
  }  
  document.getElementById('data').innerHTML = html.join('');  
};  
  
var handleError = function(e) {  
  alert('Error: ' + e.cause ? e.cause.statusText : e.message);  
};  
</script>  
  
<div id="data"><!-- dynamically filled --></div>  