(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
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
        k['updateText'](k['translateObjs'][a]);
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
var script = {"scrollBarMargin":2,"scrollBarColor":"#000000","children":["this.MainViewer","this.Container_8200B81B_8F76_0B0E_41AB_FA3E1EECD1FB","this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B"],"hash": "06265221f196bea957cd66a4fe9b6f13e43b1719a7b18f52fe77ba1077dd11b6", "definitions": [{"width":"100%","height":"100%","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressRight":"33%","subtitlesFontFamily":"Arial","progressOpacity":0.7,"playbackBarHeadBorderRadius":0,"data":{"name":"Main Viewer"},"progressBarBorderColor":"#000000","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","playbackBarBorderSize":0,"vrThumbstickRotationStep":20,"firstTransitionDuration":0,"progressBorderColor":"#000000","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowBlurRadius":3,"toolTipShadowColor":"#333138","subtitlesTextShadowHorizontalLength":1,"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#000000"],"playbackBarLeft":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBottom":10,"progressHeight":2,"progressBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadShadow":true,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"progressBarBorderSize":0,"id":"MainViewer","vrPointerSelectionColor":"#FF6600","toolTipFontColor":"#606060","playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","playbackBarBottom":5,"progressBorderRadius":2,"vrPointerColor":"#FFFFFF","playbackBarHeight":10,"subtitlesTop":0,"progressLeft":"33%","minHeight":50,"playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"toolTipBorderColor":"#767676","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipPaddingRight":6,"class":"ViewerArea","playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundOpacity":0.2},{"distanceToFloor":1.2,"overlays":["this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_t.webp","cube":{"class":"ImageResource","levels":[{"colCount":48,"height":4096,"url":"media/panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_0/{face}/0/{row}_{column}.webp","width":24576,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":8},{"colCount":24,"height":2048,"url":"media/panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_0/{face}/1/{row}_{column}.webp","width":12288,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"colCount":12,"height":1024,"url":"media/panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_0/{face}/2/{row}_{column}.webp","width":6144,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"colCount":6,"height":512,"url":"media/panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_0/{face}/3/{row}_{column}.webp","width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}]}}],"thumbnailUrl":"media/panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_t.webp","id":"panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051","class":"Panorama","vfov":180,"adjacentPanoramas":[{"data":{"overlayID":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},"distance":30.46,"yaw":-80.09,"select":"this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":85.43,"panorama":"this.panorama_8397FE56_8F76_0706_4180_3AD61FB86009"}],"hfov":360,"data":{"label":"Bad"},"label":trans('panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051.label'),"hfovMax":130},{"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_8397FE56_8F76_0706_4180_3AD61FB86009_camera","media":"this.panorama_8397FE56_8F76_0706_4180_3AD61FB86009","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_camera","media":"this.panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051","player":"this.MainViewerPanoramaPlayer"}]},{"distanceToFloor":1.2,"overlays":["this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8397FE56_8F76_0706_4180_3AD61FB86009_t.webp","cube":{"class":"ImageResource","levels":[{"colCount":48,"height":4096,"url":"media/panorama_8397FE56_8F76_0706_4180_3AD61FB86009_0/{face}/0/{row}_{column}.webp","width":24576,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":8},{"colCount":24,"height":2048,"url":"media/panorama_8397FE56_8F76_0706_4180_3AD61FB86009_0/{face}/1/{row}_{column}.webp","width":12288,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"colCount":12,"height":1024,"url":"media/panorama_8397FE56_8F76_0706_4180_3AD61FB86009_0/{face}/2/{row}_{column}.webp","width":6144,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"colCount":6,"height":512,"url":"media/panorama_8397FE56_8F76_0706_4180_3AD61FB86009_0/{face}/3/{row}_{column}.webp","width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}]}}],"thumbnailUrl":"media/panorama_8397FE56_8F76_0706_4180_3AD61FB86009_t.webp","id":"panorama_8397FE56_8F76_0706_4180_3AD61FB86009","class":"Panorama","vfov":180,"adjacentPanoramas":[{"data":{"overlayID":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},"distance":12.48,"yaw":85.43,"select":"this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":-80.09,"panorama":"this.panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051"}],"hfov":360,"data":{"label":"Zimmer"},"label":trans('panorama_8397FE56_8F76_0706_4180_3AD61FB86009.label'),"hfovMax":130},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_8397FE56_8F76_0706_4180_3AD61FB86009_camera","media":"this.panorama_8397FE56_8F76_0706_4180_3AD61FB86009","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_camera","media":"this.panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12","id":"panorama_8404AAD6_8F76_0F06_41DE_5EA35F0AF051_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"backgroundOpacity":0,"scrollBarMargin":2,"horizontalAlign":"center","id":"Container_8200B81B_8F76_0B0E_41AB_FA3E1EECD1FB","layout":"horizontal","left":0,"right":0,"scrollBarColor":"#000000","data":{"name":"Container806"},"minHeight":0,"minWidth":0,"gap":10,"bottom":0,"class":"Container","height":200,"verticalAlign":"bottom","propagateClick":false},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer"},{"backgroundOpacity":0.2,"itemThumbnailOpacity":1,"rollOverItemLabelFontWeight":"bold","toolTipPaddingBottom":4,"itemLabelFontColor":"#FFFFFF","toolTipPaddingTop":4,"itemPaddingRight":3,"toolTipFontWeight":"bold","itemThumbnailShadow":false,"selectedItemLabelFontSize":"20px","itemLabelFontWeight":"bold","left":"1.97%","paddingTop":10,"itemThumbnailBorderRadius":0,"data":{"name":"ThumbnailList807"},"paddingBottom":10,"itemLabelFontSize":"20px","toolTipFontSize":"2vmin","gap":10,"itemBorderRadius":0,"itemLabelFontStyle":"normal","itemLabelPosition":"top","toolTipShadowColor":"#333138","itemBackgroundColor":[],"itemLabelTextDecoration":"none","propagateClick":false,"itemPaddingTop":3,"selectedItemBackgroundColorDirection":"horizontal","toolTipPaddingLeft":6,"itemThumbnailShadowBlurRadius":4,"itemHorizontalAlign":"left","scrollBarMargin":2,"paddingLeft":20,"rollOverItemLabelTextDecoration":"none","toolTipTextShadowColor":"#000000","itemBackgroundColorDirection":"vertical","scrollBarWidth":20,"paddingRight":20,"itemBackgroundOpacity":0,"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B","toolTipFontColor":"#606060","backgroundColor":["#000000"],"tabIndex":0,"rollOverItemLabelFontSize":"20px","scrollBarColor":"#FFFFFF","playList":"this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","layout":"vertical","backgroundColorRatios":[0.00784313725490196],"selectedItemLabelFontWeight":"bold","itemThumbnailScaleMode":"fit_outside","maxWidth":800,"maxHeight":600,"itemThumbnailShadowOpacity":0.8,"minHeight":0,"minWidth":0,"toolTipBorderColor":"#767676","itemThumbnailShadowColor":"#000000","top":"28.65%","toolTipPaddingRight":6,"class":"ThumbnailList","itemThumbnailShadowSpread":1,"itemPaddingLeft":3,"toolTipFontFamily":"Arial","itemPaddingBottom":3,"height":472,"width":301,"rollOverItemLabelFontStyle":"normal","toolTipBackgroundColor":"#F6F6F6","itemLabelFontFamily":"Arial","itemBackgroundColorRatios":[],"itemLabelGap":5},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A","id":"panorama_8397FE56_8F76_0706_4180_3AD61FB86009_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"data":{"hasPanoramaAction":true,"label":"IrAZimmer"},"items":[{"pitch":-2.25,"class":"HotspotPanoramaOverlayImage","distance":100,"yaw":-80.09,"scaleMode":"fit_inside","vfov":11.2,"hfov":11.42,"image":"this.AnimatedImageResource_987A391C_8F92_0D09_41CE_5EDD73A9125A","data":{"label":"IrAZimmer"}}],"enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"]},{"data":{"hasPanoramaAction":true,"label":"IrABad"},"items":[{"pitch":-5.48,"class":"HotspotPanoramaOverlayImage","distance":100,"yaw":85.43,"scaleMode":"fit_inside","vfov":16.17,"hfov":17.68,"image":"this.AnimatedImageResource_987BC91C_8F92_0D09_41D7_FFEE9F6CA083","data":{"label":"IrABad"}}],"enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"]},{"id":"sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"id":"sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"rowCount":6,"finalFrame":"first","levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","width":1200,"class":"ImageResourceLevel"}],"colCount":4,"frameCount":24,"id":"AnimatedImageResource_987A391C_8F92_0D09_41CE_5EDD73A9125A","class":"AnimatedImageResource","frameDuration":41},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"finalFrame":"first","levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","width":1200,"class":"ImageResourceLevel"}],"colCount":4,"frameCount":24,"id":"AnimatedImageResource_987BC91C_8F92_0D09_41D7_FFEE9F6CA083","class":"AnimatedImageResource","frameDuration":41},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist])","backgroundColor":["#FFFFFF"],"data":{"locales":{"es":"locale/es.txt"},"defaultLocale":"es","history":{},"displayTooltipInTouchScreens":true,"name":"Player804","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1}},"id":"rootPlayer","layout":"absolute","backgroundColorRatios":[0],"watermark":false,"scripts":{"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"clone":TDV.Tour.Script.clone,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"historyGoBack":TDV.Tour.Script.historyGoBack,"setValue":TDV.Tour.Script.setValue,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"getOverlays":TDV.Tour.Script.getOverlays,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getKey":TDV.Tour.Script.getKey,"getPixels":TDV.Tour.Script.getPixels,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"executeJS":TDV.Tour.Script.executeJS,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizStart":TDV.Tour.Script.quizStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"enableVR":TDV.Tour.Script.enableVR,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"init":TDV.Tour.Script.init,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"initQuiz":TDV.Tour.Script.initQuiz,"playAudioList":TDV.Tour.Script.playAudioList,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"createTween":TDV.Tour.Script.createTween,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentByName":TDV.Tour.Script.getComponentByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"textToSpeech":TDV.Tour.Script.textToSpeech,"startMeasurement":TDV.Tour.Script.startMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaByName":TDV.Tour.Script.getMediaByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"unregisterKey":TDV.Tour.Script.unregisterKey,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"existsKey":TDV.Tour.Script.existsKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"translate":TDV.Tour.Script.translate,"registerKey":TDV.Tour.Script.registerKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showWindow":TDV.Tour.Script.showWindow,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setLocale":TDV.Tour.Script.setLocale},"minHeight":0,"minWidth":0,"gap":10,"class":"Player","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","propagateClick":false,"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Tue Feb 24 2026