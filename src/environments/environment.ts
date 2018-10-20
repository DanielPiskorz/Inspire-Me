// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FAVQS_API_URL: 'https://favqs.com/api/qotd',
  PIXABAY_API_URL: 'https://pixabay.com/api/',
  PIXABAY_KEY: '5943798-876ea09dff1de2324ea1ec7bd',
  PIXABAY_QUERY: 'mountains',
  PIXABAY_PARAMS: 'image_type=photo&pretty=true',
  MAX_IMAGES: 20 // <3, 200>
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
