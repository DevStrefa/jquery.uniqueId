# jquery.uniqueId 1.0.0

Simple jQuery plugin for generating unique identifiers.

### Usage

First of all You must include plugin file in Your html document, after that You should have access to $.uniqueId() function.

This function has few configuration options:
 * `attribute` - Default: __'id'__ - *name of attribute to "generate".*
 * `prefix` - Default: **'uid_'** - *prefix for generated value.*
 * `suffix` - Default: __''__ - *suffix for generated value.*
 * `counter_start` - Default: __1__ - *start number to search.*

Full configured function will look like this:

```javascript
  $.uniqueId({
        attribute: 'id',
        prefix:'uid_',
        suffix:'',
        counter_start: 1
  });
```
and for empty document it returns: 'uid_1'

Please see file example.html to better understand mechanism of this plugin but it's really simple. Quick example let's assume that you want to find first available attribute "id" for mask: article_{article number}_show.
So You should use plugin like this:

```javascript
var id=$.uniqueId({prefix:'article_',suffix:'_show'});
```

### License
Whole code in this repository is Under [MIT license](https://github.com/DevStrefa/jquery.uniqueId/blob/master/LICENSE)