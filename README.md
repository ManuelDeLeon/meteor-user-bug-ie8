meteor-user-bug-ie8
===================

Meteor.user() doesn't work with IE8. You get "Object doesn't support this property or method."

You can see it in the console of IE8's developer's tools.

currentUser in a template causes a stack overflow.

This only happens when running in --production (with a minified js).