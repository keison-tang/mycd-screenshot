# mycd-screenshot

Screenshots main message in online viewers of myCountdown emails. Makes use of [Html2Canvas](http://html2canvas.hertzen.com) library.

### Pros
- Perfect screenshots in one click
- Can handle messages larger than browser viewport - instead of having to do a scrolling screenshot and cropping
- Replaces card numbers with 123456789 to hide personal info
 
### Cons
- No cross origin images as no proxy implemented: signature and fuel balance are replaced with placeholders

## Requirements

Up to date Google Chrome

## Installation

1. Clone repo
1. Open Google Chrome, then Extensions > Manage Extensions
1. Enable Developer Mode
1. Click 'Load unpacked' then select the repo folder
1. (Optional) Disable Developer Mode if not needed further

## Usage

1. Open an online viewer link for a myCD email
1. Click the extension icon
1. The screenshot will automatically download once it finishes processing - it shouldn't take more than a few seconds

## Known bugs

- Subsequent screenshots (after the first one) of the same page results in a white bar at the top of the image and slight truncation at the bottom of the image. If you need to screenshot the same page again, then refresh the page before doing so. 
    - Seems related to offsets - exactly 12px for Windows, 24px for macOS

## Tested

- macOS 11.1, Chrome 88
- Windows 10, Chrome 88

## Notes
- Ampersands (&) not working in regex for some reason
- Chrome API's don't work in content scripts, put in background
- Implement proxy if cross origin images required

## Random
If you make a comment on a commit in the online Github interface with links that auto-reference to a Github issue, it's permanently referenced, it persists even if you delete the comment. If repo is private, then only users who can see the repo can see the reference in the issues. If public, then everyone can see the references. Github support can't help to remove references. To remove the references, either ask the issue owner to remove the issue (unlikely) or "duplicate" the repo as follows with the exact history but without the references.

1. Create a new empty repo in Github
1. Navigate to source repo
1. ```git push --mirror newRepoURL```
1. Delete the old repo off Github / rename to something else
1. Rename the new repo to the old repo
1. Done - got the exact same repo but with no reference links to issues