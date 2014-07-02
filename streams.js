// Refresh Functions
  var refreshAll;
  function tweet_refresh() { refreshAll = window.setTimeout(all(),1000); }
  function clearAll() { window.clearTimeout(refreshAll); }



//Display functions

function all() {
        var $body = $('#tweets');
        $body.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $(
            '<div class="tweet"><div class="message"><span class="user">@' + tweet.user + '</span>: ' + tweet.message + tweet.created_at + '</div></div>');
          $tweet.appendTo($body);
          index -= 1;
        }
      }

function shawn() {
        var $body = $('#tweets');
        $body.html('');

        var index = streams.users.shawndrost.length - 1;
        while(index >= 0){
          var tweet = streams.users.shawndrost[index];
          var $tweet = $(
            '<div class="tweet"><div class="message"><span class="user">@' + 'shawndrost' + '</span>: ' + tweet.message + tweet.created_at + '</div></div>');
          $tweet.appendTo($body);
          index -= 1;
        }
        //window.setTimeout(refreshShawn,1000);
      }

function shark() {
        var $body = $('#tweets');
        $body.html('');

        var index = streams.users.sharksforcheap.length - 1;
        while(index >= 0){
          var tweet = streams.users.sharksforcheap[index];
          var $tweet = $(
            '<div class="tweet"><div class="message"><span class="user">@' + 'sharksforcheap' + '</span>: ' + tweet.message + tweet.created_at + '</div></div>');
          $tweet.appendTo($body);
          index -= 1;
        }
        //window.setTimeout(refreshShark,1000);
      }

function mrac() {
        var $body = $('#tweets');
        $body.html('');

        var index = streams.users.mracus.length - 1;
        while(index >= 0){
          var tweet = streams.users.mracus[index];
          var $tweet = $(
            '<div class="tweet"><div class="message"><span class="user">@' + 'mracus' + '</span>: ' + tweet.message + tweet.created_at + '</div></div>');
          $tweet.appendTo($body);
          index -= 1;
        }
        //window.setTimeout(refreshMrac,1000);
      }

function doug() {
        var $body = $('#tweets');
        $body.html('');

        var index = streams.users.douglascalhoun.length - 1;
        while(index >= 0){
          var tweet = streams.users.douglascalhoun[index];
          var $tweet = $(
            '<div class="tweet"><div class="message"><span class="user">@' + 'douglascalhoun' + '</span>: ' + tweet.message + tweet.created_at + '</div></div>');
          $tweet.appendTo($body);
          index -= 1;
        }
        //window.setTimeout(refreshDoug,1000);
      }



