# HTMLDecode

Decode HTML entity characters in a string into their proper character forms. Focus is on package size (~10kb gzipped) rather than speed, although it's certainly not slow.

Supported formats:
 * `&AElig;`
 * `&aelig;`
 * `&#198;`
 * `&#x000C6;`

It does not support non-strict codes (e.g. `&amp` without `;`) because this causes more problems than it solves.