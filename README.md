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
- Implement proxy is cross origin images required