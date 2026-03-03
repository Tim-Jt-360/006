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
var script = {"class":"Player","scrollBarColor":"#000000","id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"defaultLocale":"es","name":"Player804","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false},"displayTooltipInTouchScreens":true,"history":{}},"backgroundColor":["#FFFFFF"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist])","layout":"absolute","backgroundColorRatios":[0],"scrollBarMargin":2,"minHeight":0,"minWidth":0,"gap":10,"propagateClick":false,"scripts":{"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setMapLocation":TDV.Tour.Script.setMapLocation,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"clone":TDV.Tour.Script.clone,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"toggleVR":TDV.Tour.Script.toggleVR,"startMeasurement":TDV.Tour.Script.startMeasurement,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"disableVR":TDV.Tour.Script.disableVR,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"openLink":TDV.Tour.Script.openLink,"mixObject":TDV.Tour.Script.mixObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getComponentByName":TDV.Tour.Script.getComponentByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setValue":TDV.Tour.Script.setValue,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"cloneBindings":TDV.Tour.Script.cloneBindings,"getKey":TDV.Tour.Script.getKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"isPanorama":TDV.Tour.Script.isPanorama,"showWindowBase":TDV.Tour.Script.showWindowBase,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showWindow":TDV.Tour.Script.showWindow,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"enableVR":TDV.Tour.Script.enableVR,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"init":TDV.Tour.Script.init,"getOverlays":TDV.Tour.Script.getOverlays,"executeJS":TDV.Tour.Script.executeJS,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playAudioList":TDV.Tour.Script.playAudioList,"unloadViewer":TDV.Tour.Script.unloadViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initQuiz":TDV.Tour.Script.initQuiz,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"shareSocial":TDV.Tour.Script.shareSocial,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initAnalytics":TDV.Tour.Script.initAnalytics,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeech":TDV.Tour.Script.textToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMainViewer":TDV.Tour.Script.getMainViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"createTween":TDV.Tour.Script.createTween,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"translate":TDV.Tour.Script.translate,"existsKey":TDV.Tour.Script.existsKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"registerKey":TDV.Tour.Script.registerKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setLocale":TDV.Tour.Script.setLocale,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia},"height":"100%","hash": "7c6f3461fb06347982eb023733c46070fcebfa7faf8571450f1f1e880805d472", "definitions": [{"class":"Container","horizontalAlign":"center","scrollBarColor":"#000000","id":"Container_8200B81B_8F76_0B0E_41AB_FA3E1EECD1FB","left":0,"data":{"name":"Container806"},"right":0,"backgroundOpacity":0,"layout":"horizontal","scrollBarMargin":2,"minHeight":0,"propagateClick":false,"minWidth":0,"gap":10,"bottom":0,"height":200,"verticalAlign":"bottom"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A"},{"rollOverItemLabelFontWeight":"bold","class":"ThumbnailList","scrollBarColor":"#FFFFFF","rollOverItemLabelTextDecoration":"none","toolTipBackgroundColor":"#F6F6F6","backgroundOpacity":0.2,"itemPaddingLeft":3,"left":"1.97%","scrollBarWidth":20,"data":{"name":"ThumbnailList807"},"paddingTop":10,"paddingBottom":10,"toolTipFontColor":"#606060","gap":10,"selectedItemBackgroundColorDirection":"horizontal","toolTipBorderColor":"#767676","rollOverItemLabelFontSize":"20px","selectedItemLabelFontSize":"20px","toolTipPaddingBottom":4,"itemLabelFontSize":"20px","itemHorizontalAlign":"left","itemThumbnailShadowSpread":1,"itemBackgroundColor":[],"itemPaddingRight":3,"paddingLeft":20,"rollOverItemLabelFontStyle":"normal","paddingRight":20,"toolTipShadowColor":"#333138","itemThumbnailOpacity":1,"itemThumbnailScaleMode":"fit_outside","itemThumbnailShadowColor":"#000000","itemLabelGap":5,"itemThumbnailShadowOpacity":0.8,"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B","toolTipFontFamily":"Arial","backgroundColor":["#000000"],"itemLabelTextDecoration":"none","tabIndex":0,"toolTipPaddingLeft":6,"toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","layout":"vertical","toolTipFontWeight":"bold","maxHeight":600,"itemBackgroundOpacity":0,"itemLabelFontWeight":"bold","maxWidth":800,"itemBackgroundColorRatios":[],"itemBorderRadius":0,"backgroundColorRatios":[0.00784313725490196],"selectedItemLabelFontWeight":"bold","playList":"this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","minWidth":0,"toolTipFontSize":"2vmin","scrollBarMargin":2,"propagateClick":false,"top":"28.65%","itemThumbnailShadowBlurRadius":4,"toolTipPaddingTop":4,"minHeight":0,"width":301,"height":472,"itemPaddingBottom":3,"itemThumbnailShadow":false,"itemLabelFontFamily":"Arial","itemPaddingTop":3,"itemLabelFontColor":"#FFFFFF","itemThumbnailBorderRadius":0,"itemLabelPosition":"top","itemBackgroundColorDirection":"vertical","itemLabelFontStyle":"normal"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_B8E01A12_B454_1F94_41C3_622243164958_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12"},{"hfovMax":130,"class":"Panorama","overlays":["this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"],"id":"panorama_B8E01A12_B454_1F94_41C3_622243164958","adjacentPanoramas":[{"data":{"overlayID":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},"backwardYaw":85.43,"panorama":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","yaw":-75.53,"class":"AdjacentPanorama","select":"this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3.get('areas').forEach(function(a){ a.trigger('click') })","distance":7.17}],"vfov":180,"data":{"label":"Bad"},"hfov":360,"distanceToFloor":1.2,"frames":[{"thumbnailUrl":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":4096,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":8,"width":24576,"colCount":48},{"tags":"ondemand","height":2048,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"colCount":24},{"tags":"ondemand","height":1024,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12},{"tags":["ondemand","preload"],"height":512,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6}]}}],"thumbnailUrl":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_t.webp","label":trans('panorama_B8E01A12_B454_1F94_41C3_622243164958.label')},{"hfovMax":130,"class":"Panorama","overlays":["this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"],"id":"panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","adjacentPanoramas":[{"data":{"overlayID":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},"backwardYaw":-75.53,"panorama":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958","yaw":85.43,"class":"AdjacentPanorama","select":"this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282.get('areas').forEach(function(a){ a.trigger('click') })","distance":12.48}],"vfov":180,"data":{"label":"Zimmer"},"hfov":360,"distanceToFloor":1.2,"frames":[{"thumbnailUrl":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":4096,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":8,"width":24576,"colCount":48},{"tags":"ondemand","height":2048,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"colCount":24},{"tags":"ondemand","height":1024,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12},{"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6}]}}],"thumbnailUrl":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_t.webp","label":trans('panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44.label')},{"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","items":[{"camera":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","media":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958_camera","media":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation"},{"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","class":"ViewerArea","subtitlesBottom":50,"progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","progressLeft":"33%","playbackBarRight":0,"subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"data":{"name":"Main Viewer"},"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"vrThumbstickRotationStep":20,"playbackBarBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"progressRight":"33%","subtitlesTextShadowOpacity":1,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowVerticalLength":0,"toolTipShadowColor":"#333138","subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","id":"MainViewer","subtitlesTop":0,"subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarLeft":0,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadHeight":15,"progressBackgroundColor":["#000000"],"minHeight":50,"playbackBarHeadBorderSize":0,"minWidth":100,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorRatios":[0,1],"propagateClick":false,"toolTipPaddingTop":4,"progressBottom":10,"subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":2,"firstTransitionDuration":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"width":"100%","progressHeight":2,"playbackBarHeadShadow":true,"height":"100%","progressBarBorderSize":0},{"id":"mainPlayList","items":[{"camera":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","media":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958_camera","media":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12"},{"data":{"hasPanoramaAction":true,"label":"IrAZimmer"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-9.49,"distance":100,"yaw":-75.53,"class":"HotspotPanoramaOverlayImage","vfov":11.2,"scaleMode":"fit_inside","data":{"label":"IrAZimmer"},"hfov":11.42,"image":"this.AnimatedImageResource_BB292F4C_B454_158C_41E2_3DAFAC4550E6"}],"enabledInVR":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"],"useHandCursor":true,"id":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},{"data":{"hasPanoramaAction":true,"label":"IrABad"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-5.48,"distance":100,"yaw":85.43,"class":"HotspotPanoramaOverlayImage","vfov":16.17,"scaleMode":"fit_inside","data":{"label":"IrABad"},"hfov":17.68,"image":"this.AnimatedImageResource_BB29EF4C_B454_158C_41DF_1E3213CCAB42"}],"enabledInVR":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"],"useHandCursor":true,"id":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},{"rowCount":6,"frameDuration":41,"levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","class":"ImageResourceLevel","width":1200}],"colCount":4,"frameCount":24,"class":"AnimatedImageResource","id":"AnimatedImageResource_BB292F4C_B454_158C_41E2_3DAFAC4550E6","finalFrame":"first"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0","mapColor":"any"},{"rowCount":6,"frameDuration":41,"levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","class":"ImageResourceLevel","width":1200}],"colCount":4,"frameCount":24,"class":"AnimatedImageResource","id":"AnimatedImageResource_BB29EF4C_B454_158C_41DF_1E3213CCAB42","finalFrame":"first"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B","mapColor":"any"}],"watermark":false,"width":"100%","xrPanelsEnabled":true,"children":["this.MainViewer","this.Container_8200B81B_8F76_0B0E_41AB_FA3E1EECD1FB","this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B"],"defaultMenu":["fullscreen","mute","rotation"]};
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
//Generated with v2026.0.3, Tue Mar 3 2026