
console.log("yesss");
document.getElementById("beg").addEventListener('click', function(e) {
    browser.runtime.sendMessage({msg:"start"});
  });
  document.getElementById("prod").addEventListener('click', function(e) {
      browser.runtime.sendMessage({msg:"prod"});
    });
  document.getElementById("temp").addEventListener('click', function(e) {
      browser.runtime.sendMessage({msg:"prod"});
    });
    document.getElementById("off").addEventListener('click', function(e) {
        browser.runtime.sendMessage({msg:"reset"});
      });
