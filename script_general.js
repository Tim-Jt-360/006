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
var script = {"children":["this.MainViewer","this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594","this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B","this.Container_F064AB4B_E147_F8EE_41E5_EF74EEBCDA66"],"scrollBarColor":"#000000","backgroundColorRatios":[0],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist]); this.playList_FBA14636_E1FE_68A6_4175_07F961D9E90E.set('selectedIndex', 0)","id":"rootPlayer","defaultMenu":["fullscreen","mute","rotation"],"data":{"locales":{"es":"locale/es.txt"},"displayTooltipInTouchScreens":true,"defaultLocale":"es","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1},"name":"Player804","history":{}},"backgroundColor":["#336600"],"layout":"absolute","scrollBarMargin":2,"class":"Player","minHeight":0,"minWidth":0,"propagateClick":false,"gap":10,"xrPanelsEnabled":true,"watermark":false,"scripts":{"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showWindowBase":TDV.Tour.Script.showWindowBase,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"clone":TDV.Tour.Script.clone,"setValue":TDV.Tour.Script.setValue,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"getOverlays":TDV.Tour.Script.getOverlays,"getKey":TDV.Tour.Script.getKey,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"getPixels":TDV.Tour.Script.getPixels,"getMediaByName":TDV.Tour.Script.getMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initAnalytics":TDV.Tour.Script.initAnalytics,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"showWindow":TDV.Tour.Script.showWindow,"init":TDV.Tour.Script.init,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getComponentByName":TDV.Tour.Script.getComponentByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizStart":TDV.Tour.Script.quizStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"enableVR":TDV.Tour.Script.enableVR,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"createTween":TDV.Tour.Script.createTween,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizFinish":TDV.Tour.Script.quizFinish,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"disableVR":TDV.Tour.Script.disableVR,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleVR":TDV.Tour.Script.toggleVR,"initQuiz":TDV.Tour.Script.initQuiz,"getMainViewer":TDV.Tour.Script.getMainViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"unloadViewer":TDV.Tour.Script.unloadViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"translate":TDV.Tour.Script.translate,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setLocale":TDV.Tour.Script.setLocale,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeech":TDV.Tour.Script.textToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex},"height":"100%","width":"100%","hash": "6c5eba1bcd2c0b64fdbf8a1319f2ab027ee1d2edfa869d93859b7774609461fc", "definitions": [{"scrollBarColor":"#000000","overflow":"scroll","id":"Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594","backgroundColor":["#000000","#000000","#000000"],"layout":"absolute","right":"2.95%","scrollBarMargin":2,"backgroundOpacity":0.2,"class":"Container","data":{"name":"Container"},"minHeight":20,"minWidth":20,"propagateClick":false,"gap":10,"bottom":"5.05%","height":"41.042%","children":["this.MapViewer"],"width":"14.209%","backgroundColorRatios":[0,0.09803921568627451,1]},{"id":"map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","height":1754,"overlays":["this.overlay_F888998C_E1C6_986A_41E5_4A5EF1A8EB98","this.overlay_F95C0E56_E1C1_B8E6_41E0_481FE506EF89"],"minimumZoomFactor":1.2,"class":"Map","fieldOfViewOverlayOutsideColor":"#000000","data":{"label":"Grundriss F\u00fcrstenlandstrasse copia"},"thumbnailUrl":"media/map_EDCCC609_E14F_A86A_41B1_176FD8A70B73_t.webp","initialZoomFactor":1.5,"fieldOfViewOverlayInsideColor":"#FFFF00","fieldOfViewOverlayRadiusScale":0.12,"scaleMode":"fit_inside","label":trans('map_EDCCC609_E14F_A86A_41B1_176FD8A70B73.label'),"fieldOfViewOverlayInsideOpacity":0.31,"image":{"class":"ImageResource","levels":["this.imlevel_F84014EC_E1FE_69AA_41E5_C19A464EA925","this.imlevel_F84004EC_E1FE_69AA_41C8_7A37A55DCAA2","this.imlevel_F84034ED_E1FE_69AA_41E8_EA64233CDD4B","this.imlevel_F84024ED_E1FE_69AA_41D3_8237870EC4BA"]},"maximumZoomFactor":1.5,"width":1240},{"touchControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","keepModel3DLoadedWithoutLocation":true},{"id":"effect_F181BBDE_E141_9FE7_41E4_16DDEF156F31","duration":500,"class":"FadeOutEffect"},{"class":"PanoramaCamera","id":"panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","initialSequence":"this.sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","items":["this.PanoramaPlayListItem_F869C5D7_E1C2_EBE5_41C8_997BCEB1C875","this.PanoramaPlayListItem_F869A5D7_E1C2_EBE5_41E9_AF30C707EEB7"],"class":"PlayList"},{"progressBarBorderRadius":2,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"left":0,"toolTipPaddingBottom":4,"toolTipShadowColor":"#333138","toolTipTextShadowColor":"#000000","playbackBarRight":0,"progressBorderRadius":2,"progressLeft":"33%","data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","vrThumbstickRotationStep":20,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"toolTipFontSize":"1.11vmin","subtitlesGap":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"progressRight":"33%","surfaceReticleColor":"#FFFFFF","id":"MainViewer","subtitlesTextShadowOpacity":1,"progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"class":"ViewerArea","playbackBarHeadHeight":15,"minHeight":50,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":100,"propagateClick":false,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"top":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"progressBottom":10,"progressHeight":2,"progressBorderColor":"#000000","height":"100%","subtitlesBottom":50,"playbackBarBottom":5},{"id":"playList_FBA14636_E1FE_68A6_4175_07F961D9E90E","items":[{"begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')","media":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","class":"MapPlayListItem","player":"this.MapViewerMapPlayer"}],"class":"PlayList"},{"horizontalAlign":"center","transparencyActive":true,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F55A4EA5_E1CE_785A_41CC_D011A53D73BC, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F55A6EA5_E1CE_785A_41A5_FA5DF0FEFB3C, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.MapViewer)){ invisibleFunc(this.MapViewer) } else { visibleFunc(this.MapViewer) }; if(this.isComponentVisible(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594)){ invisibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) } else { visibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) }","id":"IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC","backgroundColor":[],"tabIndex":0,"right":"10.45%","data":{"name":"IconButton"},"backgroundOpacity":0.3,"class":"IconButton","minHeight":1,"minWidth":1,"propagateClick":false,"verticalAlign":"middle","bottom":"0%","width":43,"height":62,"iconURL":"skin/IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC.png","backgroundColorRatios":[]},{"id":"effect_F55A4EA5_E1CE_785A_41CC_D011A53D73BC","duration":500,"class":"FadeInEffect"},{"pressedIconColor":"#888888","backgroundColorRatios":[0,0.09803921568627451,1],"iconHeight":"100%","data":{"name":"CloseButton"},"iconLineWidth":2,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F1819BDE_E141_9FE7_41BD_6358E9FDD6BA, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F181BBDE_E141_9FE7_41E4_16DDEF156F31, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.MapViewer)){ invisibleFunc(this.MapViewer) } else { visibleFunc(this.MapViewer) }; if(this.isComponentVisible(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594)){ invisibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) } else { visibleFunc(this.Container_EEF25FC2_E142_B7DE_41E8_E945B67C1594) }","id":"CloseButton_EE87EDC8_E147_9BEB_41D6_12D1D77CFE9E","left":"19.6%","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"layout":"horizontal","tabIndex":0,"fontFamily":"Arial","fontSize":"1.29vmin","fontColor":"#FFFFFF","backgroundOpacity":0,"rollOverIconColor":"#666666","class":"CloseButton","minHeight":1,"minWidth":1,"propagateClick":false,"top":"17.19%","width":40,"height":40,"iconColor":"#000000","visible":false,"iconWidth":"100%","borderColor":"#000000"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},"backwardYaw":-75.53,"distance":12.48,"class":"AdjacentPanorama","panorama":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958","yaw":85.43,"select":"this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","vfov":180,"thumbnailUrl":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_t.webp","id":"panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","mapLocations":[{"y":937.67,"angle":269.25,"class":"PanoramaMapLocation","map":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","x":697.59}],"overlays":["this.overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"],"frames":[{"thumbnailUrl":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":4096,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":8,"colCount":48,"width":24576},{"tags":"ondemand","height":2048,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":4,"colCount":24,"width":12288},{"tags":"ondemand","height":1024,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"url":"media/panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"width":3072}]}}],"hfovMax":130,"data":{"label":"Zimmer"},"distanceToFloor":1.2,"hfov":360,"label":trans('panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44.label')},{"progressBarBorderRadius":2,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"left":"2%","toolTipPaddingBottom":4,"toolTipShadowColor":"#333138","toolTipTextShadowColor":"#000000","playbackBarRight":0,"progressBorderRadius":2,"progressLeft":"33%","data":{"name":"Floorplan Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","vrThumbstickRotationStep":20,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"toolTipFontSize":"1.11vmin","subtitlesGap":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"progressRight":"33%","surfaceReticleColor":"#FFFFFF","id":"MapViewer","subtitlesTextShadowOpacity":1,"progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"class":"ViewerArea","playbackBarHeadHeight":15,"minHeight":1,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":1,"propagateClick":false,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"top":"8%","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"95%","vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"progressBottom":10,"progressHeight":2,"progressBorderColor":"#000000","height":"85.739%","subtitlesBottom":10,"playbackBarBottom":5},{"backgroundColorRatios":[0.00784313725490196],"itemPaddingBottom":3,"selectedItemLabelFontSize":"20px","itemLabelPosition":"top","left":"1.97%","itemLabelFontWeight":"bold","toolTipPaddingBottom":4,"toolTipShadowColor":"#333138","toolTipTextShadowColor":"#000000","itemBackgroundColor":[],"paddingTop":10,"toolTipFontWeight":"bold","itemThumbnailShadowSpread":1,"scrollBarMargin":2,"paddingBottom":10,"toolTipFontFamily":"Arial","itemBackgroundColorDirection":"vertical","backgroundOpacity":0.2,"toolTipPaddingTop":4,"itemPaddingLeft":3,"rollOverItemLabelTextDecoration":"none","itemThumbnailScaleMode":"fit_outside","itemThumbnailShadowOpacity":0.8,"itemPaddingTop":3,"rollOverItemLabelFontStyle":"normal","itemThumbnailShadowColor":"#000000","toolTipPaddingRight":6,"data":{"name":"ThumbnailList807"},"itemBackgroundOpacity":0,"toolTipPaddingLeft":6,"itemLabelFontStyle":"normal","gap":10,"itemThumbnailShadow":false,"itemLabelFontFamily":"Arial","itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","toolTipFontSize":"2vmin","scrollBarColor":"#FFFFFF","scrollBarWidth":20,"itemThumbnailShadowBlurRadius":4,"itemThumbnailBorderRadius":0,"itemLabelFontColor":"#FFFFFF","paddingLeft":20,"paddingRight":20,"toolTipBorderColor":"#767676","id":"ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B","selectedItemBackgroundColorDirection":"horizontal","backgroundColor":["#000000"],"tabIndex":0,"layout":"vertical","itemPaddingRight":3,"toolTipFontColor":"#606060","maxHeight":600,"maxWidth":800,"itemBorderRadius":0,"itemLabelGap":5,"class":"ThumbnailList","minHeight":0,"minWidth":0,"propagateClick":false,"top":"28.65%","playList":"this.ThumbnailList_8200E81B_8F76_0B0F_41C7_D47D6792A46B_playlist","rollOverItemLabelFontWeight":"bold","width":301,"itemBackgroundColorRatios":[],"height":472,"toolTipBackgroundColor":"#F6F6F6","itemLabelTextDecoration":"none","itemLabelFontSize":"20px","itemHorizontalAlign":"left","rollOverItemLabelFontSize":"20px"},{"id":"effect_F1819BDE_E141_9FE7_41BD_6358E9FDD6BA","duration":500,"class":"FadeInEffect"},{"scrollBarColor":"#000000","overflow":"scroll","id":"Container_F064AB4B_E147_F8EE_41E5_EF74EEBCDA66","layout":"absolute","right":"3.22%","scrollBarMargin":2,"backgroundOpacity":0,"class":"Container","data":{"name":"Container"},"minHeight":20,"minWidth":20,"propagateClick":false,"gap":10,"bottom":"40.88%","height":"5.13%","children":["this.IconButton_F58DDDF2_E1C2_FBBE_41DC_AFCA258BBBFC","this.CloseButton_EE87EDC8_E147_9BEB_41D6_12D1D77CFE9E"],"width":"2.994%"},{"class":"PanoramaCamera","id":"panorama_B8E01A12_B454_1F94_41C3_622243164958_camera","initialSequence":"this.sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"id":"effect_F55A6EA5_E1CE_785A_41A5_FA5DF0FEFB3C","duration":500,"class":"FadeOutEffect"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_FBA2665C_E1FE_68EB_41EA_C5CED7E7E637","this.PanoramaPlayListItem_FBA2F65C_E1FE_68EB_41DF_0A14C2D737DC"],"class":"PlayList"},{"id":"MapViewerMapPlayer","movementMode":"constrained","class":"MapPlayer","viewerArea":"this.MapViewer"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},"backwardYaw":85.43,"distance":7.17,"class":"AdjacentPanorama","panorama":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","yaw":-75.53,"select":"this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","vfov":180,"thumbnailUrl":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_t.webp","id":"panorama_B8E01A12_B454_1F94_41C3_622243164958","mapLocations":[{"y":475.92,"angle":180.86,"class":"PanoramaMapLocation","map":"this.map_EDCCC609_E14F_A86A_41B1_176FD8A70B73","x":625.62}],"overlays":["this.overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"],"frames":[{"thumbnailUrl":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":4096,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":8,"colCount":48,"width":24576},{"tags":"ondemand","height":2048,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":4,"colCount":24,"width":12288},{"tags":"ondemand","height":1024,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"url":"media/panorama_B8E01A12_B454_1F94_41C3_622243164958_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"width":3072}]}}],"hfovMax":130,"data":{"label":"Bad"},"distanceToFloor":1.2,"hfov":360,"label":trans('panorama_B8E01A12_B454_1F94_41C3_622243164958.label')},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","useHandCursor":true,"id":"overlay_F888998C_E1C6_986A_41E5_4A5EF1A8EB98","image":{"data":{"label":"Image"},"height":76,"class":"HotspotMapOverlayImage","offsetY":38,"offsetX":38,"scaleMode":"fit_inside","y":937.67,"x":697.59,"image":"this.res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","width":76},"areas":["this.HotspotMapOverlayArea_F6CAD9FA_E1C6_9BAE_41D3_2202E9A00830"]},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","useHandCursor":true,"id":"overlay_F95C0E56_E1C1_B8E6_41E0_481FE506EF89","image":{"data":{"label":"Image"},"height":76,"class":"HotspotMapOverlayImage","offsetY":38,"offsetX":38,"scaleMode":"fit_inside","y":475.92,"x":625.62,"image":"this.res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","width":76},"areas":["this.HotspotMapOverlayArea_F9558E65_E1C1_B8DA_41D0_E7FED38CAB59"]},{"height":2048,"url":trans('imlevel_F84014EC_E1FE_69AA_41E5_C19A464EA925.url'),"class":"ImageResourceLevel","id":"imlevel_F84014EC_E1FE_69AA_41E5_C19A464EA925","width":1447},{"height":1024,"url":trans('imlevel_F84004EC_E1FE_69AA_41C8_7A37A55DCAA2.url'),"class":"ImageResourceLevel","id":"imlevel_F84004EC_E1FE_69AA_41C8_7A37A55DCAA2","width":723},{"height":512,"url":trans('imlevel_F84034ED_E1FE_69AA_41E8_EA64233CDD4B.url'),"class":"ImageResourceLevel","id":"imlevel_F84034ED_E1FE_69AA_41E8_EA64233CDD4B","width":361},{"tags":"preload","height":256,"url":trans('imlevel_F84024ED_E1FE_69AA_41D3_8237870EC4BA.url'),"class":"ImageResourceLevel","id":"imlevel_F84024ED_E1FE_69AA_41D3_8237870EC4BA","width":180},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_84F843DB_8F76_1D0E_41E0_92710D153D1A"},{"camera":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","media":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_F869C5D7_E1C2_EBE5_41C8_997BCEB1C875","begin":"this.setMapLocation(this.PanoramaPlayListItem_F869C5D7_E1C2_EBE5_41C8_997BCEB1C875, this.MapViewerMapPlayer)"},{"camera":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958_camera","media":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_F869A5D7_E1C2_EBE5_41E9_AF30C707EEB7","begin":"this.setMapLocation(this.PanoramaPlayListItem_F869A5D7_E1C2_EBE5_41E9_AF30C707EEB7, this.MapViewerMapPlayer)"},{"data":{"hasPanoramaAction":true,"label":"IrABad"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"],"maps":[],"items":[{"pitch":-5.48,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":85.43,"vfov":16.17,"image":"this.AnimatedImageResource_FBA005B0_E1FE_6BBB_41E0_8EE76A2979FD","hfov":17.68,"data":{"label":"IrABad"}}],"enabledInVR":true,"useHandCursor":true,"id":"overlay_9DA1B9AD_8F72_0D0A_41DB_865CE5838282"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_84FFD3DC_8F76_1D0A_41A5_5ADF3C76CF12"},{"camera":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44_camera","media":"this.panorama_BFB7D562_B454_75B4_41D2_ED481ADFFA44","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_FBA2665C_E1FE_68EB_41EA_C5CED7E7E637","begin":"this.setMapLocation(this.PanoramaPlayListItem_FBA2665C_E1FE_68EB_41EA_C5CED7E7E637, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958_camera","media":"this.panorama_B8E01A12_B454_1F94_41C3_622243164958","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_FBA2F65C_E1FE_68EB_41DF_0A14C2D737DC","begin":"this.setMapLocation(this.PanoramaPlayListItem_FBA2F65C_E1FE_68EB_41DF_0A14C2D737DC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"data":{"hasPanoramaAction":true,"label":"IrAZimmer"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"],"maps":[],"items":[{"pitch":-9.49,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-75.53,"vfov":11.2,"image":"this.AnimatedImageResource_FBA055B1_E1FE_6BBA_4190_8CAED37D89AC","hfov":11.42,"data":{"label":"IrAZimmer"}}],"enabledInVR":true,"useHandCursor":true,"id":"overlay_9D682AF5_8F72_0F1A_41B9_CF7AEE1FD7A3"},{"id":"res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62","levels":[{"height":76,"url":"media/res_F85EA0ED_E1C2_E9AA_41C8_9FCC75C33B62_0.webp","class":"ImageResourceLevel","width":76}],"class":"ImageResource"},{"id":"HotspotMapOverlayArea_F6CAD9FA_E1C6_9BAE_41D3_2202E9A00830","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_FBA2665C_E1FE_68EB_41EA_C5CED7E7E637, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotMapOverlayArea"},{"id":"HotspotMapOverlayArea_F9558E65_E1C1_B8DA_41D0_E7FED38CAB59","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_FBA2F65C_E1FE_68EB_41DF_0A14C2D737DC, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotMapOverlayArea"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9DA209B8_8F72_0D0A_41D2_96A1AC951D1B"},{"rowCount":6,"levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","class":"ImageResourceLevel","width":1200}],"class":"AnimatedImageResource","colCount":4,"id":"AnimatedImageResource_FBA005B0_E1FE_6BBB_41E0_8EE76A2979FD","frameCount":24,"finalFrame":"first","frameDuration":41},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9D5F6AFD_8F72_0F0B_41E1_8579A879EEF0"},{"rowCount":6,"levels":[{"height":1800,"url":"media/res_9C27F249_8F72_7F0B_41C4_D8F21CC7E4AE_0.webp","class":"ImageResourceLevel","width":1200}],"class":"AnimatedImageResource","colCount":4,"id":"AnimatedImageResource_FBA055B1_E1FE_6BBA_4190_8CAED37D89AC","frameCount":24,"finalFrame":"first","frameDuration":41}]};
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
//Generated with v2026.0.3, Thu Mar 12 2026