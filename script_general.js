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
var script = {"children":["this.MainViewer","this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594","this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B","this.Container_F064AB4B_E147_F8EE_41E5_EF74EEBCDA66"],"watermark":false,"scrollBarColor":"#000000","xrPanelsEnabled":true,"hash": "dc4044ea4b6df39de59ca1811f869d1b0626387150c1b1c0473855ff6933e01a", "definitions": [{"progressBottom":10,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressHeight":2,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"progressBorderSize":0,"playbackBarBottom":5,"progressBarBorderRadius":2,"subtitlesBottom":50,"progressBarBorderSize":0,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"left":0,"playbackBarHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"toolTipPaddingBottom":4,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"progressBorderRadius":2,"progressLeft":"33%","subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipShadowColor":"#333138","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColorRatios":[0],"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","propagateClick":false,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderRadius":0,"subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipFontSize":"1.11vmin","id":"MainViewer","vrPointerSelectionTime":2000,"surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"toolTipPaddingLeft":6,"progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"subtitlesTop":0,"progressBarBorderColor":"#000000","subtitlesTextShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"minHeight":50,"minWidth":100,"toolTipFontColor":"#606060","playbackBarLeft":0,"playbackBarHeadShadowBlurRadius":3,"top":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","playbackBarHeadShadowColor":"#000000","height":"100%","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"progressBackgroundColor":["#000000"],"width":"100%","firstTransitionDuration":0},{"class":"PanoramaCamera","initialSequence":"this.sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12","id":"panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"}},{"horizontalAlign":"center","id":"IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC","tabIndex":0,"data":{"name":"IconButton"},"backgroundColor":[],"backgroundOpacity":0.3,"right":"10.45%","backgroundColorRatios":[],"iconURL":"skin/IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","bottom":"0%","width":43,"height":62,"class":"IconButton","transparencyActive":true,"propagateClick":false,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F55A4EA5_E1CE_785A_41CC_D011A53D73BC, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F55A6EA5_E1CE_785A_41A5_FA5DF0FEFB3C, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.MapViewer)){ invisibleFunc(this.MapViewer) } else { visibleFunc(this.MapViewer) }; if(this.isComponentVisible(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594)){ invisibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) } else { visibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) }"},{"rollOverItemLabelFontSize":"20px","itemPaddingBottom":3,"itemLabelPosition":"top","toolTipBorderColor":"#767676","left":"1.97%","itemPaddingRight":3,"selectedItemLabelFontSize":"20px","data":{"name":"ThumbnailList807"},"itemHorizontalAlign":"left","toolTipBackgroundColor":"#F6F6F6","backgroundOpacity":0.2,"toolTipFontWeight":"bold","paddingTop":10,"paddingBottom":10,"toolTipPaddingBottom":4,"toolTipTextShadowColor":"#000000","rollOverItemLabelTextDecoration":"none","backgroundColorRatios":[0.00784313725490196],"itemLabelFontWeight":"bold","itemThumbnailShadowSpread":1,"scrollBarMargin":2,"itemBackgroundColor":[],"toolTipFontFamily":"Arial","itemPaddingLeft":3,"toolTipShadowColor":"#333138","itemBackgroundColorDirection":"vertical","gap":10,"itemThumbnailShadowOpacity":0.8,"itemThumbnailScaleMode":"fit_outside","toolTipPaddingTop":4,"itemThumbnailShadowColor":"#000000","rollOverItemLabelFontStyle":"normal","itemLabelFontStyle":"normal","class":"ThumbnailList","selectedItemLabelFontWeight":"bold","itemBackgroundOpacity":0,"propagateClick":false,"itemLabelFontFamily":"Arial","itemThumbnailShadow":false,"toolTipPaddingRight":6,"itemThumbnailOpacity":1,"paddingLeft":20,"scrollBarColor":"#FFFFFF","itemPaddingTop":3,"paddingRight":20,"scrollBarWidth":20,"itemThumbnailShadowBlurRadius":4,"toolTipFontSize":"2vmin","id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B","itemLabelFontColor":"#FFFFFF","backgroundColor":["#000000"],"tabIndex":0,"toolTipPaddingLeft":6,"selectedItemBackgroundColorDirection":"horizontal","maxHeight":600,"layout":"vertical","maxWidth":800,"itemThumbnailBorderRadius":0,"itemLabelGap":5,"minHeight":0,"minWidth":0,"itemBackgroundColorRatios":[],"toolTipFontColor":"#606060","itemBorderRadius":0,"top":"28.65%","width":301,"playList":"this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","height":472,"rollOverItemLabelFontWeight":"bold","itemLabelTextDecoration":"none","itemLabelFontSize":"20px"},{"data":{"label":"Grundriss F\u00fcrstenlandstrasse copia"},"fieldOfViewOverlayInsideOpacity":0.31,"height":1754,"initialZoomFactor":1.5,"thumbnailUrl":"media/map_EDCCC609_E14F_A86A_41B1_176FD8A70B73_t.webp","class":"Map","image":{"levels":["this.imlevel_E772AECA_E986_84BA_41D4_9674A301F654","this.imlevel_E772BECB_E986_84BA_41C8_89001BBECBBC","this.imlevel_E7729ECB_E986_84BA_41EA_10CA5FB5E65E","this.imlevel_E772EECB_E986_84BA_41E2_9D373DEE211F"],"class":"ImageResource"},"scaleMode":"fit_inside","width":1240,"overlays":["this.overlay_F888998C_E1C6_986A_41E5_4A5EF1A8EB98","this.overlay_F95C0E56_E1C1_B8E6_41E0_481FE506EF89"],"minimumZoomFactor":1.2,"label":trans('map_EDCCC609_E14F_A86A_41B1_176FD8A70B73.label'),"fieldOfViewOverlayInsideColor":"#FFFF00","id":"map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","fieldOfViewOverlayRadiusScale":0.12,"fieldOfViewOverlayOutsideColor":"#000000","maximumZoomFactor":1.5},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_E76A5FAB_E986_84FA_41CB_5FB1743DD053","this.PanoramaPlayListItem_E76ACFAB_E986_84FA_41C6_29AC6B064827"],"class":"PlayList"},{"frames":[{"cube":{"levels":[{"tags":"ondemand","rowCount":10,"height":5120,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/0/{row}_{column}.webp","width":30720,"class":"TiledImageResourceLevel","colCount":60},{"tags":"ondemand","rowCount":5,"height":2560,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/1/{row}_{column}.webp","width":15360,"class":"TiledImageResourceLevel","colCount":30},{"tags":"ondemand","rowCount":3,"height":1536,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/2/{row}_{column}.webp","width":9216,"class":"TiledImageResourceLevel","colCount":18},{"tags":"ondemand","rowCount":2,"height":1024,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/3/{row}_{column}.webp","width":6144,"class":"TiledImageResourceLevel","colCount":12},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"url":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_0/{face}/4/{row}_{column}.webp","width":3072,"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_t.webp","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_t.webp","data":{"label":"Bad"},"label":trans('panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88.label'),"id":"panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","overlays":["this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"],"class":"Panorama","distanceToFloor":1.2,"adjacentPanoramas":[{"data":{"overlayID":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},"distance":7.17,"yaw":-75.53,"class":"AdjacentPanorama","panorama":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","backwardYaw":85.43,"select":"this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3.get('areas').forEach(function(a){ a.trigger('click') })"}],"vfov":180,"mapLocations":[{"y":475.92,"angle":180.86,"class":"PanoramaMapLocation","map":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","x":625.62}],"hfovMax":130,"hfov":360},{"iconColor":"#000000","id":"CloseButton_EE87EDC8_E147_9BEB_41D6_12D1D77CFE9E","fontSize":"1.29vmin","rollOverIconColor":"#666666","left":"19.6%","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontFamily":"Arial","tabIndex":0,"data":{"name":"CloseButton"},"backgroundOpacity":0,"iconWidth":"100%","backgroundColorRatios":[0,0.09803921568627451,1],"iconHeight":"100%","layout":"horizontal","fontColor":"#FFFFFF","minHeight":1,"pressedIconColor":"#888888","minWidth":1,"iconLineWidth":2,"top":"17.19%","height":40,"width":40,"class":"CloseButton","propagateClick":false,"borderColor":"#000000","visible":false,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F1819BDE_E141_9FE7_41BD_6358E9FDD6BA, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F181BBDE_E141_9FE7_41E4_16DDEF156F31, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.MapViewer)){ invisibleFunc(this.MapViewer) } else { visibleFunc(this.MapViewer) }; if(this.isComponentVisible(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594)){ invisibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) } else { visibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) }"},{"class":"PanoramaCamera","initialSequence":"this.sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A","id":"panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"}},{"id":"effect_F55A6EA5_E1CE_785A_41A5_FA5DF0FEFB3C","class":"FadeOutEffect","duration":500},{"frames":[{"cube":{"levels":[{"tags":"ondemand","rowCount":8,"height":4096,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/0/{row}_{column}.webp","width":24576,"class":"TiledImageResourceLevel","colCount":48},{"tags":"ondemand","rowCount":4,"height":2048,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/1/{row}_{column}.webp","width":12288,"class":"TiledImageResourceLevel","colCount":24},{"tags":"ondemand","rowCount":2,"height":1024,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/2/{row}_{column}.webp","width":6144,"class":"TiledImageResourceLevel","colCount":12},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/3/{row}_{column}.webp","width":3072,"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_t.webp","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_t.webp","data":{"label":"Zimmer"},"label":trans('panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44.label'),"id":"panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","overlays":["this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"],"class":"Panorama","distanceToFloor":1.2,"adjacentPanoramas":[{"data":{"overlayID":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},"distance":12.48,"yaw":85.43,"class":"AdjacentPanorama","panorama":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","backwardYaw":-75.53,"select":"this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282.get('areas').forEach(function(a){ a.trigger('click') })"}],"vfov":180,"mapLocations":[{"y":937.67,"angle":269.25,"class":"PanoramaMapLocation","map":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","x":697.59}],"hfovMax":130,"hfov":360},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation"},{"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","items":["this.PanoramaPlayListItem_E5E3A655_E99A_87AE_41DE_D325C061992C","this.PanoramaPlayListItem_E5E01655_E99A_87AE_41DB_02AB3D31C67A"],"class":"PlayList"},{"id":"playList_E76B7F87_E986_84AA_41E6_5A62FF00B0DC","items":[{"begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')","media":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","class":"MapPlayListItem","player":"this.MapViewerMapPlayer"}],"class":"PlayList"},{"id":"effect_F55A4EA5_E1CE_785A_41CC_D011A53D73BC","class":"FadeInEffect","duration":500},{"id":"effect_F181BBDE_E141_9FE7_41E4_16DDEF156F31","class":"FadeOutEffect","duration":500},{"progressBottom":10,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressHeight":2,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"progressBorderSize":0,"playbackBarBottom":5,"progressBarBorderRadius":2,"subtitlesBottom":10,"progressBarBorderSize":0,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"left":"2%","playbackBarHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","data":{"name":"Floorplan Viewer"},"toolTipPaddingBottom":4,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"progressBorderRadius":2,"progressLeft":"33%","subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipShadowColor":"#333138","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColorRatios":[0],"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","propagateClick":false,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderRadius":0,"subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipFontSize":"1.11vmin","id":"MapViewer","vrPointerSelectionTime":2000,"surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"toolTipPaddingLeft":6,"progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"subtitlesTop":0,"progressBarBorderColor":"#000000","subtitlesTextShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"minHeight":1,"minWidth":1,"toolTipFontColor":"#606060","playbackBarLeft":0,"playbackBarHeadShadowBlurRadius":3,"top":"8%","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","playbackBarHeadShadowColor":"#000000","height":"85.739%","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"progressBackgroundColor":["#000000"],"width":"95%","firstTransitionDuration":0},{"overflow":"scroll","scrollBarColor":"#000000","id":"Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594","data":{"name":"Container"},"backgroundColor":["#000000","#000000","#000000"],"backgroundOpacity":0.2,"right":"2.95%","backgroundColorRatios":[0,0.09803921568627451,1],"layout":"absolute","scrollBarMargin":2,"minHeight":20,"minWidth":20,"gap":10,"bottom":"5.05%","height":"41.042%","class":"Container","propagateClick":false,"width":"14.209%","children":["this.MapViewer"]},{"id":"MapViewerMapPlayer","movementMode":"constrained","viewerArea":"this.MapViewer","class":"MapPlayer"},{"overflow":"scroll","scrollBarColor":"#000000","id":"Container_F064AB4B_E147_F8EE_41E5_EF74EEBCDA66","data":{"name":"Container"},"backgroundOpacity":0,"right":"3.22%","layout":"absolute","scrollBarMargin":2,"minHeight":20,"minWidth":20,"gap":10,"bottom":"40.88%","height":"5.13%","class":"Container","propagateClick":false,"width":"2.994%","children":["this.IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC","this.CloseButton_EE87EDC8_E147_9BEB_41D6_12D1D77CFE9E"]},{"id":"effect_F1819BDE_E141_9FE7_41BD_6358E9FDD6BA","class":"FadeInEffect","duration":500},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12"},{"height":2048,"url":trans('imlevel_E772AECA_E986_84BA_41D4_9674A301F654.url'),"class":"ImageResourceLevel","id":"imlevel_E772AECA_E986_84BA_41D4_9674A301F654","width":1447},{"height":1024,"url":trans('imlevel_E772BECB_E986_84BA_41C8_89001BBECBBC.url'),"class":"ImageResourceLevel","id":"imlevel_E772BECB_E986_84BA_41C8_89001BBECBBC","width":723},{"height":512,"url":trans('imlevel_E7729ECB_E986_84BA_41EA_10CA5FB5E65E.url'),"class":"ImageResourceLevel","id":"imlevel_E7729ECB_E986_84BA_41EA_10CA5FB5E65E","width":361},{"tags":"preload","height":256,"url":trans('imlevel_E772EECB_E986_84BA_41E2_9D373DEE211F.url'),"class":"ImageResourceLevel","id":"imlevel_E772EECB_E986_84BA_41E2_9D373DEE211F","width":180},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","id":"overlay_F888998C_E1C6_986A_41E5_4A5EF1A8EB98","image":{"data":{"label":"Image"},"height":76,"class":"HotspotMapOverlayImage","offsetX":38,"scaleMode":"fit_inside","offsetY":38,"y":937.67,"x":697.59,"image":"this.res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","width":76},"areas":["this.HotspotMapOverlayArea_F6CAD9FA_E1C6_9BAE_41D3_2202E9A00830"],"useHandCursor":true},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","id":"overlay_F95C0E56_E1C1_B8E6_41E0_481FE506EF89","image":{"data":{"label":"Image"},"height":76,"class":"HotspotMapOverlayImage","offsetX":38,"scaleMode":"fit_inside","offsetY":38,"y":475.92,"x":625.62,"image":"this.res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","width":76},"areas":["this.HotspotMapOverlayArea_F9558E65_E1C1_B8DA_41D0_E7FED38CAB59"],"useHandCursor":true},{"camera":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","media":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_E76A5FAB_E986_84FA_41CB_5FB1743DD053","begin":"this.setMapLocation(this.PanoramaPlayListItem_E76A5FAB_E986_84FA_41CB_5FB1743DD053, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_camera","media":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_E76ACFAB_E986_84FA_41C6_29AC6B064827","begin":"this.setMapLocation(this.PanoramaPlayListItem_E76ACFAB_E986_84FA_41C6_29AC6B064827, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"},{"data":{"hasPanoramaAction":true,"label":"IrAZimmer"},"areas":["this.HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"],"class":"HotspotPanoramaOverlay","items":[{"pitch":-9.49,"distance":100,"yaw":-75.53,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":11.2,"image":"this.AnimatedImageResource_E76B1F52_E986_85AA_41EB_70BB7CA20D62","data":{"label":"IrAZimmer"},"hfov":11.42}],"enabledInVR":true,"id":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3","maps":[],"useHandCursor":true},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A"},{"data":{"hasPanoramaAction":true,"label":"IrABad"},"areas":["this.HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"],"class":"HotspotPanoramaOverlay","items":[{"pitch":-5.48,"distance":100,"yaw":85.43,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":16.17,"image":"this.AnimatedImageResource_E768CF52_E986_85AA_41C6_E8C88AA9960F","data":{"label":"IrABad"},"hfov":17.68}],"enabledInVR":true,"id":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282","maps":[],"useHandCursor":true},{"camera":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","media":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_E5E3A655_E99A_87AE_41DE_D325C061992C","begin":"this.setMapLocation(this.PanoramaPlayListItem_E5E3A655_E99A_87AE_41DE_D325C061992C, this.MapViewerMapPlayer)"},{"camera":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88_camera","media":"this.panorama_E69793ED_E999_9C7E_41E9_F938B34D9E88","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_E5E01655_E99A_87AE_41DB_02AB3D31C67A","begin":"this.setMapLocation(this.PanoramaPlayListItem_E5E01655_E99A_87AE_41DB_02AB3D31C67A, this.MapViewerMapPlayer)"},{"id":"res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","levels":[{"height":76,"url":"media/res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62_0.webp","width":76,"class":"ImageResourceLevel"}],"class":"ImageResource"},{"id":"HotspotMapOverlayArea_F6CAD9FA_E1C6_9BAE_41D3_2202E9A00830","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_E76A5FAB_E986_84FA_41CB_5FB1743DD053, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotMapOverlayArea"},{"id":"HotspotMapOverlayArea_F9558E65_E1C1_B8DA_41D0_E7FED38CAB59","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_E76ACFAB_E986_84FA_41C6_29AC6B064827, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotMapOverlayArea"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"},{"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","width":1200,"class":"ImageResourceLevel"}],"frameDuration":41,"frameCount":24,"id":"AnimatedImageResource_E76B1F52_E986_85AA_41EB_70BB7CA20D62","finalFrame":"first","colCount":4},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"},{"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","width":1200,"class":"ImageResourceLevel"}],"frameDuration":41,"frameCount":24,"id":"AnimatedImageResource_E768CF52_E986_85AA_41C6_E8C88AA9960F","finalFrame":"first","colCount":4}],"id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false},"defaultLocale":"es","name":"Player804"},"backgroundColor":["#336600"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist]); this.playList_E76B7F87_E986_84AA_41E6_5A62FF00B0DC.set('selectedIndex', 0)","backgroundColorRatios":[0],"layout":"absolute","scrollBarMargin":2,"minHeight":0,"minWidth":0,"gap":10,"height":"100%","class":"Player","scripts":{"enableVR":TDV.Tour.Script.enableVR,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openLink":TDV.Tour.Script.openLink,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoForward":TDV.Tour.Script.historyGoForward,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"unloadViewer":TDV.Tour.Script.unloadViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"clone":TDV.Tour.Script.clone,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playAudioList":TDV.Tour.Script.playAudioList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"mixObject":TDV.Tour.Script.mixObject,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getKey":TDV.Tour.Script.getKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showWindowBase":TDV.Tour.Script.showWindowBase,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"disableVR":TDV.Tour.Script.disableVR,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"createTween":TDV.Tour.Script.createTween,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeech":TDV.Tour.Script.textToSpeech,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"registerKey":TDV.Tour.Script.registerKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeJS":TDV.Tour.Script.executeJS,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"downloadFile":TDV.Tour.Script.downloadFile,"getMainViewer":TDV.Tour.Script.getMainViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"resumePlayers":TDV.Tour.Script.resumePlayers,"translate":TDV.Tour.Script.translate,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setLocale":TDV.Tour.Script.setLocale,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled},"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"width":"100%"};
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
//Generated with v2026.0.3, Fri Mar 13 2026