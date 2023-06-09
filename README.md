# Alternator
![icon of an abstract car altnerator with the text ALT on it](/icon_128.png)

## Purpose

This extension is designed to help archival institutions (such as museums) collect alt text and descriptions from enthusiastic users. 

## What it does

When installed, the extension will check object pages for a set of meta tags that are used to configure a form. If the fields Alternator needs are present, a button will be added to a designated image container that will allow the user to display the form and submit alt text and a description for that object. Right now, the form supports submitting data to a Google Sheet, either directly (requires configuration) or indirectly, via a paid Sheetmonkey endpoint. 

Any institution can use this extension to collect alt text submissions by adding `<meta>` tags with the following name attributes to the `<head>` element.

| Name  | Description |
| ------------- | ------------- |
| alternator-id  | Reference ID for the object  |
| alternator-url  | Reference URL for the object  |
| alternator-contact  | Contact for routing the request (probably an email address)  |
| alternator-guide | Link to your institution's style guide for writing alt text and descriptions  |
| alternator-target | Either "sm" for [SheetMonkey](https://sheetmonkey.io/) or "gs" for [Google Sheets](https://github.com/levinunnink/html-form-to-google-sheet) |
| alternator-path | The unique portion of your form action URL |
| alternator-container | The id of the element where the Alternator button should appear |

For example:

    <meta name="alternator-id" content="274889">
    <meta name="alternator-url" content="https://hvrd.art/o/274889">
    <meta name="alternator-contact" content="am_europeanamerican@harvard.edu">
    <meta name="alternator-guide" content="https://s3.amazonaws.com/media.harvardartmuseums.org/assets/files/HAM_image-description-guidelines_2020_03-25_final.pdf">
    <meta name="alternator-target" content="sm">
    <meta name="alternator-path" content="go6****MTpjKuUAaASk">
    <meta name="alternator-container" content="image-container">