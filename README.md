# DscPersonalSiteV1
This project is being developed as the first version of the product that will be used by Google DSC for their Angular + Firebase series.

## Important steps taken during development

- Added Angular Material UI library to app
  - Chose the "Deep Purple/Amber" theme
- Cleaned up the `app.component.html` template to remove auto-generated code
- Make a navbar
  - Make a Device Service that enables us to make it dynamic
  - A slightly different view offering a mobile-friendly UI
- Firebase init
  - Update `.gitignore` to avoid uploading sensitive credentials online
- Generate Login page
  - Add routing to this page
  - Connect the router link to navbar links (for both desktop and mobile views)
  - implemented a notification service using `toastr` to display output of http calls on UI
  - implemented an auth service that allows the user to login with email and password
    - uses firebase authentication