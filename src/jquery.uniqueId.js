/**
 *
 * jquery.uniqueId.js  version: 1.0.0
 * Author: Cichy <d3ut3r@gmail.com>
 * License: MIT
 *
 */
(function($){

    $.uniqueId = function(options){

        var settings=$.extend({

            attribute: 'id',
            prefix: 'uid_',
            suffix: '',
            counter_start: 1

        },options);

        var id_counter=parseInt(settings.counter_start);

        while($('['+settings.attribute.toString()+'='+settings.prefix.toString()+id_counter.toString()+settings.suffix+']').length>0){
            id_counter+=1;
        }

        return settings.prefix.toString()+id_counter.toString()+settings.suffix.toString();

    }

}(jQuery))