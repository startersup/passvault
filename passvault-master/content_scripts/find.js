document.getElementById("beg").addEventListener('click', function(e) {
    browser.runtime.sendMessage({msg:"start"});
  });
  document.getElementById("prod").addEventListener('click', function(e) {
      browser.runtime.sendMessage({msg:"prod"});
    });
    document.getElementById("reset").addEventListener('click', function(e) {
        browser.runtime.sendMessage({msg:"reset"});
      });
