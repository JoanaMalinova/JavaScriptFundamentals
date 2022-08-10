function browserHistory(browserActivity, comanndArr) {
    for (let command of comanndArr) {
        let [currCommand, siteName] = command.split(' ')
        if (currCommand === 'Open') {
            browserActivity['Open Tabs'].push(siteName);
            browserActivity['Browser Logs'].push(command);
        } else if (currCommand === 'Close') {
            if (browserActivity['Open Tabs'].includes(siteName)) {
                let index = browserActivity['Open Tabs'].indexOf(siteName);
                browserActivity['Open Tabs'].splice(index, 1);
                browserActivity['Recently Closed'].push(siteName);
                browserActivity['Browser Logs'].push(command);
            }
        } else {
            browserActivity['Open Tabs'] = [];
            browserActivity['Recently Closed'] = [];
            browserActivity['Browser Logs'] = [];
        }
    }   
    console.log(`${browserActivity['Browser Name']}`);
    console.log(`Open Tabs: ${browserActivity['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserActivity['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserActivity['Browser Logs'].join(', ')}`);
}
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)

