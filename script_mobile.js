(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer_mobile","this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile","this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_mobile","this.Container_F064AB4B_E147_F8EE_41E5_EF74EEBCDA66_mobile"],"scrollBarColor":"#000000","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_mobile_playlist]); this.playList_1AB01C7A_0BEC_4960_4179_BC69FA09F43C.set('selectedIndex', 0)","id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false},"defaultLocale":"es","history":{},"name":"Player804"},"backgroundColor":["#336600"],"class":"Player","scrollBarMargin":2,"layout":"absolute","hash": "7dcfc7baa8628ee4cbad984db451a1d3b46d936c06690ca8c9be704477989d6b", "definitions": [{"id":"mainPlayList","items":["this.PanoramaPlayListItem_1AB3BC7B_0BEC_4960_41A4_C5140DF23FBF","this.PanoramaPlayListItem_1AB36C7B_0BEC_4960_419D_954CBDDBD958"],"class":"PlayList"},{"id":"MapViewer_mobileMapPlayer","class":"MapPlayer","movementMode":"constrained","viewerArea":"this.MapViewer_mobile"},{"id":"effect_F181BBDE_E141_9FE7_41E4_16DDEF156F31","class":"FadeOutEffect","duration":500},{"selectedItemLabelFontSize":"10px","itemBorderRadius":0,"left":"0.03%","class":"ThumbnailList","toolTipBorderRadius":1,"itemThumbnailShadowColor":"#000000","paddingTop":5,"itemPaddingRight":3,"toolTipFontWeight":"bold","itemThumbnailScaleMode":"fit_outside","scrollBarMargin":1,"paddingBottom":5,"itemHorizontalAlign":"left","itemLabelPosition":"top","toolTipPaddingLeft":3,"itemLabelTextDecoration":"none","itemThumbnailShadowOpacity":0.8,"toolTipTextShadowBlurRadius":1,"playList":"this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_mobile_playlist","data":{"name":"ThumbnailList807"},"toolTipShadowColor":"#333138","itemThumbnailOpacity":1,"toolTipTextShadowColor":"#000000","itemPaddingBottom":3,"propagateClick":false,"gap":5,"itemLabelFontFamily":"Arial","toolTipFontFamily":"Arial","itemBackgroundColor":[],"itemBackgroundColorDirection":"vertical","toolTipBackgroundColor":"#F6F6F6","itemLabelFontStyle":"normal","rollOverItemLabelFontStyle":"normal","itemPaddingLeft":3,"itemThumbnailBorderSize":0,"toolTipShadowBlurRadius":1,"backgroundColorRatios":[0.00784313725490196],"selectedItemLabelFontWeight":"bold","paddingLeft":10,"toolTipPaddingRight":3,"paddingRight":10,"backgroundOpacity":0.2,"scrollBarColor":"#FFFFFF","id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_mobile","tabIndex":0,"itemThumbnailShadowSpread":1,"backgroundColor":["#000000"],"itemThumbnailShadowBlurRadius":4,"itemBackgroundColorRatios":[],"itemLabelFontColor":"#FFFFFF","itemPaddingTop":3,"toolTipBorderColor":"#767676","maxHeight":300,"layout":"vertical","maxWidth":400,"toolTipFontSize":"2vmin","minHeight":0,"minWidth":0,"toolTipFontColor":"#606060","itemThumbnailBorderRadius":0,"itemLabelGap":2,"top":"0.32%","itemThumbnailShadow":false,"rollOverItemLabelFontWeight":"bold","width":150.5,"height":236,"itemLabelFontWeight":"bold","selectedItemBackgroundColorDirection":"horizontal","rollOverItemLabelTextDecoration":"none","itemLabelFontSize":"10px","rollOverItemLabelFontSize":"10px","itemBackgroundOpacity":0},{"id":"effect_F1819BDE_E141_9FE7_41BD_6358E9FDD6BA","class":"FadeInEffect","duration":500},{"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F1819BDE_E141_9FE7_41BD_6358E9FDD6BA, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F181BBDE_E141_9FE7_41E4_16DDEF156F31, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.MapViewer_mobile)){ invisibleFunc(this.MapViewer_mobile) } else { visibleFunc(this.MapViewer_mobile) }; if(this.isComponentVisible(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile)){ invisibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile) } else { visibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile) }","paddingLeft":2.5,"paddingRight":2.5,"pressedIconColor":"#888888","id":"CloseButton_EE87EDC8_E147_9BEB_41D6_12D1D77CFE9E_mobile","fontSize":"1.29vmin","left":"19.6%","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"class":"CloseButton","layout":"horizontal","data":{"name":"CloseButton"},"paddingTop":2.5,"fontFamily":"Arial","paddingBottom":2.5,"tabIndex":0,"minHeight":1,"iconColor":"#000000","minWidth":1,"iconLineWidth":1,"top":"17.19%","propagateClick":false,"height":20,"width":20,"iconHeight":"100%","borderColor":"#000000","iconWidth":"100%","rollOverIconColor":"#666666","visible":false,"fontColor":"#FFFFFF","backgroundColorRatios":[0,0.09803921568627451,1],"backgroundOpacity":0},{"class":"PanoramaCamera","id":"panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12"},{"class":"PanoramaCamera","id":"panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A"},{"scrollBarColor":"#000000","id":"Container_F064AB4B_E147_F8EE_41E5_EF74EEBCDA66_mobile","overflow":"scroll","data":{"name":"Container"},"class":"Container","layout":"absolute","right":"3.22%","scrollBarMargin":1,"minHeight":10,"minWidth":10,"propagateClick":false,"bottom":"40.88%","scrollBarWidth":5,"gap":5,"children":["this.CloseButton_EE87EDC8_E147_9BEB_41D6_12D1D77CFE9E_mobile"],"height":"5.13%","width":"2.994%","backgroundOpacity":0},{"id":"effect_F55A4EA5_E1CE_785A_41CC_D011A53D73BC","class":"FadeInEffect","duration":500},{"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"url":"media/panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":48,"tags":"ondemand","width":24576},{"rowCount":4,"height":2048,"url":"media/panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":24,"tags":"ondemand","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_t.webp"}],"id":"panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E","overlays":["this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"],"class":"Panorama","thumbnailUrl":"media/panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_t.webp","hfovMax":130,"distanceToFloor":1.2,"hfov":360,"mapLocations":[{"y":937.67,"angle":269.25,"class":"PanoramaMapLocation","map":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","x":697.59}],"data":{"label":"Zimmer"},"vfov":180,"label":trans('panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},"distance":12.48,"class":"AdjacentPanorama","yaw":85.43,"panorama":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","select":"this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-75.53}]},{"id":"playList_1AB01C7A_0BEC_4960_4179_BC69FA09F43C","items":[{"begin":"this.MapViewer_mobileMapPlayer.set('movementMode', 'free_drag_and_rotation')","class":"MapPlayListItem","media":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","player":"this.MapViewer_mobileMapPlayer"}],"class":"PlayList"},{"data":{"label":"Grundriss F\u00fcrstenlandstrasse copia"},"height":1754,"width":1240,"class":"Map","fieldOfViewOverlayInsideColor":"#FFFF00","overlays":["this.overlay_F888998C_E1C6_986A_41E5_4A5EF1A8EB98","this.overlay_F95C0E56_E1C1_B8E6_41E0_481FE506EF89"],"scaleMode":"fit_inside","fieldOfViewOverlayOutsideColor":"#000000","fieldOfViewOverlayInsideOpacity":0.31,"maximumZoomFactor":1.5,"label":trans('map_EDCCC609_E14F_A86A_41B1_176FD8A70B73.label'),"id":"map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","image":{"class":"ImageResource","levels":["this.imlevel_1ACA9B22_0BEC_48E0_4195_0972316538B0","this.imlevel_1ACA8B22_0BEC_48E0_4186_51EDF0E21D59","this.imlevel_1ACA7B23_0BEC_48E0_4190_41E142EDA68F","this.imlevel_1ACA6B23_0BEC_48E0_4197_63632E900CFD"]},"fieldOfViewOverlayRadiusScale":0.12,"minimumZoomFactor":1.2,"thumbnailUrl":"media/map_EDCCC609_E14F_A86A_41B1_176FD8A70B73_t.webp","initialZoomFactor":1.5},{"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":10,"height":5120,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":60,"tags":"ondemand","width":30720},{"rowCount":5,"height":2560,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":30,"tags":"ondemand","width":15360},{"rowCount":3,"height":1536,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_t.webp"}],"id":"panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","overlays":["this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"],"class":"Panorama","thumbnailUrl":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_t.webp","hfovMax":130,"distanceToFloor":1.2,"hfov":360,"mapLocations":[{"y":475.92,"angle":180.86,"class":"PanoramaMapLocation","map":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","x":625.62}],"data":{"label":"Bad"},"vfov":180,"label":trans('panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},"distance":7.17,"class":"AdjacentPanorama","yaw":-75.53,"panorama":"this.panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E","select":"this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":85.43}]},{"scrollBarColor":"#000000","id":"Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile","overflow":"scroll","data":{"name":"Container"},"backgroundColor":["#000000","#000000","#000000"],"class":"Container","layout":"absolute","right":"-0.1%","scrollBarMargin":1,"minHeight":10,"minWidth":10,"top":"0.21%","propagateClick":false,"gap":5,"scrollBarWidth":5,"children":["this.MapViewer_mobile","this.IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC_mobile"],"height":"29.955%","width":"46.014%","backgroundColorRatios":[0,0.09803921568627451,1],"backgroundOpacity":0.2},{"playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderSize":0,"left":0,"class":"ViewerArea","toolTipBorderRadius":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"progressHeight":2,"toolTipPaddingLeft":3,"playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowBlurRadius":1,"progressBottom":10,"playbackBarBottom":5,"progressBorderSize":0,"data":{"name":"Main Viewer"},"toolTipShadowColor":"#333138","subtitlesBottom":50,"progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarHeight":10,"propagateClick":false,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"progressBorderRadius":2,"playbackBarProgressBorderRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","progressLeft":"33%","toolTipShadowBlurRadius":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":3,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer_mobile","vrThumbstickRotationStep":20,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"minHeight":25,"minWidth":50,"toolTipFontColor":"#606060","playbackBarBorderSize":0,"subtitlesBackgroundColor":"#000000","top":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"progressBarBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"width":"100%","subtitlesTextShadowOpacity":1,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"height":"100%","subtitlesFontColor":"#FFFFFF"},{"playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderSize":0,"left":"2%","class":"ViewerArea","toolTipBorderRadius":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"progressHeight":2,"toolTipPaddingLeft":3,"playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowBlurRadius":1,"progressBottom":10,"playbackBarBottom":5,"progressBorderSize":0,"data":{"name":"Floorplan Viewer"},"toolTipShadowColor":"#333138","subtitlesBottom":10,"progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarHeight":10,"propagateClick":false,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"progressBorderRadius":2,"playbackBarProgressBorderRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","progressLeft":"33%","toolTipShadowBlurRadius":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":3,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"id":"MapViewer_mobile","vrThumbstickRotationStep":20,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"minHeight":1,"minWidth":1,"toolTipFontColor":"#606060","playbackBarBorderSize":0,"subtitlesBackgroundColor":"#000000","top":"8%","progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"progressBarBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"width":"95%","subtitlesTextShadowOpacity":1,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"height":"85.739%","subtitlesFontColor":"#FFFFFF"},{"iconURL":"skin/IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC.png","horizontalAlign":"center","id":"IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC_mobile","tabIndex":0,"data":{"name":"IconButton"},"backgroundColor":[],"class":"IconButton","right":"4.75%","minHeight":1,"minWidth":1,"transparencyActive":true,"propagateClick":false,"bottom":"80%","width":21.5,"height":31,"verticalAlign":"middle","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F55A4EA5_E1CE_785A_41CC_D011A53D73BC, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F55A6EA5_E1CE_785A_41A5_FA5DF0FEFB3C, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.MapViewer_mobile)){ invisibleFunc(this.MapViewer_mobile) } else { visibleFunc(this.MapViewer_mobile) }; if(this.isComponentVisible(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile)){ invisibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile) } else { visibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594_mobile) }","backgroundColorRatios":[],"backgroundOpacity":0.3},{"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_mobile_playlist","items":["this.PanoramaPlayListItem_046589B6_0BD5_CBE3_417A_14C729019729","this.PanoramaPlayListItem_046439B6_0BD5_CBE3_41A4_11BDD906AAA9"],"class":"PlayList"},{"id":"effect_F55A6EA5_E1CE_785A_41A5_FA5DF0FEFB3C","class":"FadeOutEffect","duration":500},{"class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","displayPlaybackBar":true,"aaEnabled":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"id":"MainViewer_mobilePanoramaPlayer","mouseControlMode":"drag_rotation"},{"camera":"this.panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_camera","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_1AB3BC7B_0BEC_4960_41A4_C5140DF23FBF","media":"this.panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E","begin":"this.setMapLocation(this.PanoramaPlayListItem_1AB3BC7B_0BEC_4960_41A4_C5140DF23FBF, this.MapViewer_mobileMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_1AB36C7B_0BEC_4960_419D_954CBDDBD958","media":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","begin":"this.setMapLocation(this.PanoramaPlayListItem_1AB36C7B_0BEC_4960_419D_954CBDDBD958, this.MapViewer_mobileMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"class":"PanoramaCameraSequence","id":"sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"data":{"hasPanoramaAction":true,"label":"IrABad"},"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"],"useHandCursor":true,"enabledInVR":true,"id":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282","items":[{"pitch":-5.48,"distance":100,"class":"HotspotPanoramaOverlayImage","yaw":85.43,"scaleMode":"fit_inside","hfov":17.68,"vfov":16.17,"image":"this.AnimatedImageResource_1AD43B80_0BEC_4FA0_4167_16F917C99760","data":{"label":"IrABad"}}]},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_F6CAD9FA_E1C6_9BAE_41D3_2202E9A00830"],"id":"overlay_F888998C_E1C6_986A_41E5_4A5EF1A8EB98","image":{"data":{"label":"Image"},"height":76,"class":"HotspotMapOverlayImage","offsetY":38,"offsetX":38,"scaleMode":"fit_inside","y":937.67,"x":697.59,"image":"this.res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","width":76},"useHandCursor":true},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_F9558E65_E1C1_B8DA_41D0_E7FED38CAB59"],"id":"overlay_F95C0E56_E1C1_B8E6_41E0_481FE506EF89","image":{"data":{"label":"Image"},"height":76,"class":"HotspotMapOverlayImage","offsetY":38,"offsetX":38,"scaleMode":"fit_inside","y":475.92,"x":625.62,"image":"this.res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","width":76},"useHandCursor":true},{"height":2048,"url":trans('imlevel_1ACA9B22_0BEC_48E0_4195_0972316538B0.url'),"class":"ImageResourceLevel","id":"imlevel_1ACA9B22_0BEC_48E0_4195_0972316538B0","width":1447},{"height":1024,"url":trans('imlevel_1ACA8B22_0BEC_48E0_4186_51EDF0E21D59.url'),"class":"ImageResourceLevel","id":"imlevel_1ACA8B22_0BEC_48E0_4186_51EDF0E21D59","width":723},{"height":512,"url":trans('imlevel_1ACA7B23_0BEC_48E0_4190_41E142EDA68F.url'),"class":"ImageResourceLevel","id":"imlevel_1ACA7B23_0BEC_48E0_4190_41E142EDA68F","width":361},{"height":256,"url":trans('imlevel_1ACA6B23_0BEC_48E0_4197_63632E900CFD.url'),"class":"ImageResourceLevel","tags":"preload","id":"imlevel_1ACA6B23_0BEC_48E0_4197_63632E900CFD","width":180},{"data":{"hasPanoramaAction":true,"label":"IrAZimmer"},"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"],"useHandCursor":true,"enabledInVR":true,"id":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3","items":[{"pitch":-9.49,"distance":100,"class":"HotspotPanoramaOverlayImage","yaw":-75.53,"scaleMode":"fit_inside","hfov":11.42,"vfov":11.2,"image":"this.AnimatedImageResource_1AD40B81_0BEC_4FA0_4170_2571D4B7C83B","data":{"label":"IrAZimmer"}}]},{"camera":"this.panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E_camera","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_046589B6_0BD5_CBE3_417A_14C729019729","media":"this.panorama_06CA68F3_0BDB_C960_417B_6862C24F6F1E","begin":"this.setMapLocation(this.PanoramaPlayListItem_046589B6_0BD5_CBE3_417A_14C729019729, this.MapViewer_mobileMapPlayer)"},{"camera":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_camera","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_046439B6_0BD5_CBE3_41A4_11BDD906AAA9","media":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","begin":"this.setMapLocation(this.PanoramaPlayListItem_046439B6_0BD5_CBE3_41A4_11BDD906AAA9, this.MapViewer_mobileMapPlayer)"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B","mapColor":"any"},{"levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","class":"ImageResourceLevel","width":1200}],"class":"AnimatedImageResource","rowCount":6,"finalFrame":"first","frameCount":24,"colCount":4,"id":"AnimatedImageResource_1AD43B80_0BEC_4FA0_4167_16F917C99760","frameDuration":41},{"id":"HotspotMapOverlayArea_F6CAD9FA_E1C6_9BAE_41D3_2202E9A00830","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1AB3BC7B_0BEC_4960_41A4_C5140DF23FBF, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotMapOverlayArea"},{"id":"res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","levels":[{"height":76,"url":"media/res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62_0.webp","class":"ImageResourceLevel","width":76}],"class":"ImageResource"},{"id":"HotspotMapOverlayArea_F9558E65_E1C1_B8DA_41D0_E7FED38CAB59","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1AB36C7B_0BEC_4960_419D_954CBDDBD958, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotMapOverlayArea"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0","mapColor":"any"},{"levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","class":"ImageResourceLevel","width":1200}],"class":"AnimatedImageResource","rowCount":6,"finalFrame":"first","frameCount":24,"colCount":4,"id":"AnimatedImageResource_1AD40B81_0BEC_4FA0_4170_2571D4B7C83B","frameDuration":41}],"minHeight":0,"xrPanelsEnabled":true,"minWidth":0,"scripts":{"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"clone":TDV.Tour.Script.clone,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setValue":TDV.Tour.Script.setValue,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlays":TDV.Tour.Script.getOverlays,"quizFinish":TDV.Tour.Script.quizFinish,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"toggleVR":TDV.Tour.Script.toggleVR,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"init":TDV.Tour.Script.init,"textToSpeech":TDV.Tour.Script.textToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showWindowBase":TDV.Tour.Script.showWindowBase,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"mixObject":TDV.Tour.Script.mixObject,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoBack":TDV.Tour.Script.historyGoBack,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"isPanorama":TDV.Tour.Script.isPanorama,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initQuiz":TDV.Tour.Script.initQuiz,"playAudioList":TDV.Tour.Script.playAudioList,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"unregisterKey":TDV.Tour.Script.unregisterKey,"enableVR":TDV.Tour.Script.enableVR,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"existsKey":TDV.Tour.Script.existsKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"disableVR":TDV.Tour.Script.disableVR,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"startMeasurement":TDV.Tour.Script.startMeasurement,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"createTween":TDV.Tour.Script.createTween,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaByName":TDV.Tour.Script.getMediaByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"unloadViewer":TDV.Tour.Script.unloadViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"translate":TDV.Tour.Script.translate,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"registerKey":TDV.Tour.Script.registerKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setLocale":TDV.Tour.Script.setLocale,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showWindow":TDV.Tour.Script.showWindow},"propagateClick":false,"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","watermark":false,"width":"100%","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.4, Fri Mar 20 2026