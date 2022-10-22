import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, QueryList, SimpleChanges } from '@angular/core';
import Swiper from 'swiper';
import { Observable, Subject } from 'rxjs';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { SwiperOptions, SwiperEvents, NavigationOptions, PaginationOptions, ScrollbarOptions, VirtualOptions } from 'swiper/types';
import * as i0 from "@angular/core";
export declare class SwiperComponent implements OnInit {
    private _ngZone;
    private elementRef;
    private _changeDetectorRef;
    private _platformId;
    enabled: SwiperOptions['enabled'];
    direction: SwiperOptions['direction'];
    touchEventsTarget: SwiperOptions['touchEventsTarget'];
    initialSlide: SwiperOptions['initialSlide'];
    speed: SwiperOptions['speed'];
    cssMode: SwiperOptions['cssMode'];
    updateOnWindowResize: SwiperOptions['updateOnWindowResize'];
    resizeObserver: SwiperOptions['resizeObserver'];
    nested: SwiperOptions['nested'];
    focusableElements: SwiperOptions['focusableElements'];
    width: SwiperOptions['width'];
    height: SwiperOptions['height'];
    preventInteractionOnTransition: SwiperOptions['preventInteractionOnTransition'];
    userAgent: SwiperOptions['userAgent'];
    url: SwiperOptions['url'];
    edgeSwipeDetection: boolean | string;
    edgeSwipeThreshold: number;
    freeMode: SwiperOptions['freeMode'];
    autoHeight: SwiperOptions['autoHeight'];
    setWrapperSize: SwiperOptions['setWrapperSize'];
    virtualTranslate: SwiperOptions['virtualTranslate'];
    effect: SwiperOptions['effect'];
    breakpoints: SwiperOptions['breakpoints'];
    spaceBetween: SwiperOptions['spaceBetween'];
    slidesPerView: SwiperOptions['slidesPerView'];
    grid: SwiperOptions['grid'];
    slidesPerGroup: SwiperOptions['slidesPerGroup'];
    slidesPerGroupSkip: SwiperOptions['slidesPerGroupSkip'];
    centeredSlides: SwiperOptions['centeredSlides'];
    centeredSlidesBounds: SwiperOptions['centeredSlidesBounds'];
    slidesOffsetBefore: SwiperOptions['slidesOffsetBefore'];
    slidesOffsetAfter: SwiperOptions['slidesOffsetAfter'];
    normalizeSlideIndex: SwiperOptions['normalizeSlideIndex'];
    centerInsufficientSlides: SwiperOptions['centerInsufficientSlides'];
    watchOverflow: SwiperOptions['watchOverflow'];
    roundLengths: SwiperOptions['roundLengths'];
    touchRatio: SwiperOptions['touchRatio'];
    touchAngle: SwiperOptions['touchAngle'];
    simulateTouch: SwiperOptions['simulateTouch'];
    shortSwipes: SwiperOptions['shortSwipes'];
    longSwipes: SwiperOptions['longSwipes'];
    longSwipesRatio: SwiperOptions['longSwipesRatio'];
    longSwipesMs: SwiperOptions['longSwipesMs'];
    followFinger: SwiperOptions['followFinger'];
    allowTouchMove: SwiperOptions['allowTouchMove'];
    threshold: SwiperOptions['threshold'];
    touchMoveStopPropagation: SwiperOptions['touchMoveStopPropagation'];
    touchStartPreventDefault: SwiperOptions['touchStartPreventDefault'];
    touchStartForcePreventDefault: SwiperOptions['touchStartForcePreventDefault'];
    touchReleaseOnEdges: SwiperOptions['touchReleaseOnEdges'];
    uniqueNavElements: SwiperOptions['uniqueNavElements'];
    resistance: SwiperOptions['resistance'];
    resistanceRatio: SwiperOptions['resistanceRatio'];
    watchSlidesProgress: SwiperOptions['watchSlidesProgress'];
    grabCursor: SwiperOptions['grabCursor'];
    preventClicks: SwiperOptions['preventClicks'];
    preventClicksPropagation: SwiperOptions['preventClicksPropagation'];
    slideToClickedSlide: SwiperOptions['slideToClickedSlide'];
    preloadImages: SwiperOptions['preloadImages'];
    updateOnImagesReady: SwiperOptions['updateOnImagesReady'];
    loop: SwiperOptions['loop'];
    loopAdditionalSlides: SwiperOptions['loopAdditionalSlides'];
    loopedSlides: SwiperOptions['loopedSlides'];
    loopFillGroupWithBlank: SwiperOptions['loopFillGroupWithBlank'];
    loopPreventsSlide: SwiperOptions['loopPreventsSlide'];
    allowSlidePrev: SwiperOptions['allowSlidePrev'];
    allowSlideNext: SwiperOptions['allowSlideNext'];
    swipeHandler: SwiperOptions['swipeHandler'];
    noSwiping: SwiperOptions['noSwiping'];
    noSwipingClass: SwiperOptions['noSwipingClass'];
    noSwipingSelector: SwiperOptions['noSwipingSelector'];
    passiveListeners: SwiperOptions['passiveListeners'];
    containerModifierClass: SwiperOptions['containerModifierClass'];
    slideClass: SwiperOptions['slideClass'];
    slideBlankClass: SwiperOptions['slideBlankClass'];
    slideActiveClass: SwiperOptions['slideActiveClass'];
    slideDuplicateActiveClass: SwiperOptions['slideDuplicateActiveClass'];
    slideVisibleClass: SwiperOptions['slideVisibleClass'];
    slideDuplicateClass: SwiperOptions['slideDuplicateClass'];
    slideNextClass: SwiperOptions['slideNextClass'];
    slideDuplicateNextClass: SwiperOptions['slideDuplicateNextClass'];
    slidePrevClass: SwiperOptions['slidePrevClass'];
    slideDuplicatePrevClass: SwiperOptions['slideDuplicatePrevClass'];
    wrapperClass: SwiperOptions['wrapperClass'];
    runCallbacksOnInit: SwiperOptions['runCallbacksOnInit'];
    observeParents: SwiperOptions['observeParents'];
    observeSlideChildren: SwiperOptions['observeSlideChildren'];
    a11y: SwiperOptions['a11y'];
    autoplay: SwiperOptions['autoplay'];
    controller: SwiperOptions['controller'];
    coverflowEffect: SwiperOptions['coverflowEffect'];
    cubeEffect: SwiperOptions['cubeEffect'];
    fadeEffect: SwiperOptions['fadeEffect'];
    flipEffect: SwiperOptions['flipEffect'];
    creativeEffect: SwiperOptions['creativeEffect'];
    cardsEffect: SwiperOptions['cardsEffect'];
    hashNavigation: SwiperOptions['hashNavigation'];
    history: SwiperOptions['history'];
    keyboard: SwiperOptions['keyboard'];
    lazy: SwiperOptions['lazy'];
    mousewheel: SwiperOptions['mousewheel'];
    parallax: SwiperOptions['parallax'];
    thumbs: SwiperOptions['thumbs'];
    zoom: SwiperOptions['zoom'];
    class: string;
    id: string;
    set navigation(val: boolean | "" | NavigationOptions);
    get navigation(): boolean | "" | NavigationOptions;
    private _navigation;
    showNavigation: boolean;
    set pagination(val: boolean | "" | PaginationOptions);
    get pagination(): boolean | "" | PaginationOptions;
    private _pagination;
    showPagination: boolean;
    set scrollbar(val: boolean | "" | ScrollbarOptions);
    get scrollbar(): boolean | "" | ScrollbarOptions;
    private _scrollbar;
    showScrollbar: boolean;
    set virtual(val: boolean | "" | VirtualOptions);
    get virtual(): boolean | "" | VirtualOptions;
    private _virtual;
    set index(index: number);
    set config(val: SwiperOptions);
    s__beforeBreakpoint: EventEmitter<SwiperEvents['_beforeBreakpoint']>;
    s__containerClasses: EventEmitter<SwiperEvents['_containerClasses']>;
    s__slideClass: EventEmitter<SwiperEvents['_slideClass']>;
    s__swiper: EventEmitter<SwiperEvents['_swiper']>;
    s_activeIndexChange: EventEmitter<SwiperEvents['activeIndexChange']>;
    s_afterInit: EventEmitter<SwiperEvents['afterInit']>;
    s_autoplay: EventEmitter<SwiperEvents['autoplay']>;
    s_autoplayStart: EventEmitter<SwiperEvents['autoplayStart']>;
    s_autoplayStop: EventEmitter<SwiperEvents['autoplayStop']>;
    s_beforeDestroy: EventEmitter<SwiperEvents['beforeDestroy']>;
    s_beforeInit: EventEmitter<SwiperEvents['beforeInit']>;
    s_beforeLoopFix: EventEmitter<SwiperEvents['beforeLoopFix']>;
    s_beforeResize: EventEmitter<SwiperEvents['beforeResize']>;
    s_beforeSlideChangeStart: EventEmitter<SwiperEvents['beforeSlideChangeStart']>;
    s_beforeTransitionStart: EventEmitter<SwiperEvents['beforeTransitionStart']>;
    s_breakpoint: EventEmitter<SwiperEvents['breakpoint']>;
    s_changeDirection: EventEmitter<SwiperEvents['changeDirection']>;
    s_click: EventEmitter<SwiperEvents['click']>;
    s_doubleTap: EventEmitter<SwiperEvents['doubleTap']>;
    s_doubleClick: EventEmitter<SwiperEvents['doubleClick']>;
    s_destroy: EventEmitter<SwiperEvents['destroy']>;
    s_fromEdge: EventEmitter<SwiperEvents['fromEdge']>;
    s_hashChange: EventEmitter<SwiperEvents['hashChange']>;
    s_hashSet: EventEmitter<SwiperEvents['hashSet']>;
    s_imagesReady: EventEmitter<SwiperEvents['imagesReady']>;
    s_init: EventEmitter<SwiperEvents['init']>;
    s_keyPress: EventEmitter<SwiperEvents['keyPress']>;
    s_lazyImageLoad: EventEmitter<SwiperEvents['lazyImageLoad']>;
    s_lazyImageReady: EventEmitter<SwiperEvents['lazyImageReady']>;
    s_loopFix: EventEmitter<SwiperEvents['loopFix']>;
    s_momentumBounce: EventEmitter<SwiperEvents['momentumBounce']>;
    s_navigationHide: EventEmitter<SwiperEvents['navigationHide']>;
    s_navigationShow: EventEmitter<SwiperEvents['navigationShow']>;
    s_observerUpdate: EventEmitter<SwiperEvents['observerUpdate']>;
    s_orientationchange: EventEmitter<SwiperEvents['orientationchange']>;
    s_paginationHide: EventEmitter<SwiperEvents['paginationHide']>;
    s_paginationRender: EventEmitter<SwiperEvents['paginationRender']>;
    s_paginationShow: EventEmitter<SwiperEvents['paginationShow']>;
    s_paginationUpdate: EventEmitter<SwiperEvents['paginationUpdate']>;
    s_progress: EventEmitter<SwiperEvents['progress']>;
    s_reachBeginning: EventEmitter<SwiperEvents['reachBeginning']>;
    s_reachEnd: EventEmitter<SwiperEvents['reachEnd']>;
    s_realIndexChange: EventEmitter<SwiperEvents['realIndexChange']>;
    s_resize: EventEmitter<SwiperEvents['resize']>;
    s_scroll: EventEmitter<SwiperEvents['scroll']>;
    s_scrollbarDragEnd: EventEmitter<SwiperEvents['scrollbarDragEnd']>;
    s_scrollbarDragMove: EventEmitter<SwiperEvents['scrollbarDragMove']>;
    s_scrollbarDragStart: EventEmitter<SwiperEvents['scrollbarDragStart']>;
    s_setTransition: EventEmitter<SwiperEvents['setTransition']>;
    s_setTranslate: EventEmitter<SwiperEvents['setTranslate']>;
    s_slideChange: EventEmitter<SwiperEvents['slideChange']>;
    s_slideChangeTransitionEnd: EventEmitter<SwiperEvents['slideChangeTransitionEnd']>;
    s_slideChangeTransitionStart: EventEmitter<SwiperEvents['slideChangeTransitionStart']>;
    s_slideNextTransitionEnd: EventEmitter<SwiperEvents['slideNextTransitionEnd']>;
    s_slideNextTransitionStart: EventEmitter<SwiperEvents['slideNextTransitionStart']>;
    s_slidePrevTransitionEnd: EventEmitter<SwiperEvents['slidePrevTransitionEnd']>;
    s_slidePrevTransitionStart: EventEmitter<SwiperEvents['slidePrevTransitionStart']>;
    s_slideResetTransitionStart: EventEmitter<SwiperEvents['slideResetTransitionStart']>;
    s_slideResetTransitionEnd: EventEmitter<SwiperEvents['slideResetTransitionEnd']>;
    s_sliderMove: EventEmitter<SwiperEvents['sliderMove']>;
    s_sliderFirstMove: EventEmitter<SwiperEvents['sliderFirstMove']>;
    s_slidesLengthChange: EventEmitter<SwiperEvents['slidesLengthChange']>;
    s_slidesGridLengthChange: EventEmitter<SwiperEvents['slidesGridLengthChange']>;
    s_snapGridLengthChange: EventEmitter<SwiperEvents['snapGridLengthChange']>;
    s_snapIndexChange: EventEmitter<SwiperEvents['snapIndexChange']>;
    s_tap: EventEmitter<SwiperEvents['tap']>;
    s_toEdge: EventEmitter<SwiperEvents['toEdge']>;
    s_touchEnd: EventEmitter<SwiperEvents['touchEnd']>;
    s_touchMove: EventEmitter<SwiperEvents['touchMove']>;
    s_touchMoveOpposite: EventEmitter<SwiperEvents['touchMoveOpposite']>;
    s_touchStart: EventEmitter<SwiperEvents['touchStart']>;
    s_transitionEnd: EventEmitter<SwiperEvents['transitionEnd']>;
    s_transitionStart: EventEmitter<SwiperEvents['transitionStart']>;
    s_update: EventEmitter<SwiperEvents['update']>;
    s_zoomChange: EventEmitter<SwiperEvents['zoomChange']>;
    s_swiper: EventEmitter<any>;
    indexChange: EventEmitter<number>;
    set prevElRef(el: ElementRef);
    _prevElRef: ElementRef;
    set nextElRef(el: ElementRef);
    _nextElRef: ElementRef;
    set scrollbarElRef(el: ElementRef);
    _scrollbarElRef: ElementRef;
    set paginationElRef(el: ElementRef);
    _paginationElRef: ElementRef;
    slidesEl: QueryList<SwiperSlideDirective>;
    private slides;
    prependSlides: Observable<SwiperSlideDirective[]>;
    appendSlides: Observable<SwiperSlideDirective[]>;
    swiperRef: Swiper;
    readonly _activeSlides: Subject<SwiperSlideDirective[]>;
    get activeSlides(): Observable<SwiperSlideDirective[]>;
    get zoomContainerClass(): string;
    containerClasses: string;
    constructor(_ngZone: NgZone, elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _platformId: Object);
    private _setElement;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private childrenSlidesInit;
    private slidesChanges;
    get isSwiperActive(): boolean;
    initSwiper(): void;
    style: any;
    currentVirtualData: any;
    private updateVirtualSlides;
    ngOnChanges(changedParams: SimpleChanges): void;
    updateInitSwiper(changedParams: any): void;
    updateSwiper(changedParams: SimpleChanges | any): void;
    calcLoopedSlides(): number;
    updateParameter(key: string, value: any): void;
    /**
     * @deprecated will be removed in upcoming versions
     */
    setIndex(index: number, speed?: number, silent?: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwiperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwiperComponent, "swiper, [swiper]", never, { "enabled": "enabled"; "direction": "direction"; "touchEventsTarget": "touchEventsTarget"; "initialSlide": "initialSlide"; "speed": "speed"; "cssMode": "cssMode"; "updateOnWindowResize": "updateOnWindowResize"; "resizeObserver": "resizeObserver"; "nested": "nested"; "focusableElements": "focusableElements"; "width": "width"; "height": "height"; "preventInteractionOnTransition": "preventInteractionOnTransition"; "userAgent": "userAgent"; "url": "url"; "edgeSwipeDetection": "edgeSwipeDetection"; "edgeSwipeThreshold": "edgeSwipeThreshold"; "freeMode": "freeMode"; "autoHeight": "autoHeight"; "setWrapperSize": "setWrapperSize"; "virtualTranslate": "virtualTranslate"; "effect": "effect"; "breakpoints": "breakpoints"; "spaceBetween": "spaceBetween"; "slidesPerView": "slidesPerView"; "grid": "grid"; "slidesPerGroup": "slidesPerGroup"; "slidesPerGroupSkip": "slidesPerGroupSkip"; "centeredSlides": "centeredSlides"; "centeredSlidesBounds": "centeredSlidesBounds"; "slidesOffsetBefore": "slidesOffsetBefore"; "slidesOffsetAfter": "slidesOffsetAfter"; "normalizeSlideIndex": "normalizeSlideIndex"; "centerInsufficientSlides": "centerInsufficientSlides"; "watchOverflow": "watchOverflow"; "roundLengths": "roundLengths"; "touchRatio": "touchRatio"; "touchAngle": "touchAngle"; "simulateTouch": "simulateTouch"; "shortSwipes": "shortSwipes"; "longSwipes": "longSwipes"; "longSwipesRatio": "longSwipesRatio"; "longSwipesMs": "longSwipesMs"; "followFinger": "followFinger"; "allowTouchMove": "allowTouchMove"; "threshold": "threshold"; "touchMoveStopPropagation": "touchMoveStopPropagation"; "touchStartPreventDefault": "touchStartPreventDefault"; "touchStartForcePreventDefault": "touchStartForcePreventDefault"; "touchReleaseOnEdges": "touchReleaseOnEdges"; "uniqueNavElements": "uniqueNavElements"; "resistance": "resistance"; "resistanceRatio": "resistanceRatio"; "watchSlidesProgress": "watchSlidesProgress"; "grabCursor": "grabCursor"; "preventClicks": "preventClicks"; "preventClicksPropagation": "preventClicksPropagation"; "slideToClickedSlide": "slideToClickedSlide"; "preloadImages": "preloadImages"; "updateOnImagesReady": "updateOnImagesReady"; "loop": "loop"; "loopAdditionalSlides": "loopAdditionalSlides"; "loopedSlides": "loopedSlides"; "loopFillGroupWithBlank": "loopFillGroupWithBlank"; "loopPreventsSlide": "loopPreventsSlide"; "allowSlidePrev": "allowSlidePrev"; "allowSlideNext": "allowSlideNext"; "swipeHandler": "swipeHandler"; "noSwiping": "noSwiping"; "noSwipingClass": "noSwipingClass"; "noSwipingSelector": "noSwipingSelector"; "passiveListeners": "passiveListeners"; "containerModifierClass": "containerModifierClass"; "slideClass": "slideClass"; "slideBlankClass": "slideBlankClass"; "slideActiveClass": "slideActiveClass"; "slideDuplicateActiveClass": "slideDuplicateActiveClass"; "slideVisibleClass": "slideVisibleClass"; "slideDuplicateClass": "slideDuplicateClass"; "slideNextClass": "slideNextClass"; "slideDuplicateNextClass": "slideDuplicateNextClass"; "slidePrevClass": "slidePrevClass"; "slideDuplicatePrevClass": "slideDuplicatePrevClass"; "wrapperClass": "wrapperClass"; "runCallbacksOnInit": "runCallbacksOnInit"; "observeParents": "observeParents"; "observeSlideChildren": "observeSlideChildren"; "a11y": "a11y"; "autoplay": "autoplay"; "controller": "controller"; "coverflowEffect": "coverflowEffect"; "cubeEffect": "cubeEffect"; "fadeEffect": "fadeEffect"; "flipEffect": "flipEffect"; "creativeEffect": "creativeEffect"; "cardsEffect": "cardsEffect"; "hashNavigation": "hashNavigation"; "history": "history"; "keyboard": "keyboard"; "lazy": "lazy"; "mousewheel": "mousewheel"; "parallax": "parallax"; "thumbs": "thumbs"; "zoom": "zoom"; "class": "class"; "id": "id"; "navigation": "navigation"; "pagination": "pagination"; "scrollbar": "scrollbar"; "virtual": "virtual"; "index": "index"; "config": "config"; }, { "s__beforeBreakpoint": "_beforeBreakpoint"; "s__containerClasses": "_containerClasses"; "s__slideClass": "_slideClass"; "s__swiper": "_swiper"; "s_activeIndexChange": "activeIndexChange"; "s_afterInit": "afterInit"; "s_autoplay": "autoplay"; "s_autoplayStart": "autoplayStart"; "s_autoplayStop": "autoplayStop"; "s_beforeDestroy": "beforeDestroy"; "s_beforeInit": "beforeInit"; "s_beforeLoopFix": "beforeLoopFix"; "s_beforeResize": "beforeResize"; "s_beforeSlideChangeStart": "beforeSlideChangeStart"; "s_beforeTransitionStart": "beforeTransitionStart"; "s_breakpoint": "breakpoint"; "s_changeDirection": "changeDirection"; "s_click": "click"; "s_doubleTap": "doubleTap"; "s_doubleClick": "doubleClick"; "s_destroy": "destroy"; "s_fromEdge": "fromEdge"; "s_hashChange": "hashChange"; "s_hashSet": "hashSet"; "s_imagesReady": "imagesReady"; "s_init": "init"; "s_keyPress": "keyPress"; "s_lazyImageLoad": "lazyImageLoad"; "s_lazyImageReady": "lazyImageReady"; "s_loopFix": "loopFix"; "s_momentumBounce": "momentumBounce"; "s_navigationHide": "navigationHide"; "s_navigationShow": "navigationShow"; "s_observerUpdate": "observerUpdate"; "s_orientationchange": "orientationchange"; "s_paginationHide": "paginationHide"; "s_paginationRender": "paginationRender"; "s_paginationShow": "paginationShow"; "s_paginationUpdate": "paginationUpdate"; "s_progress": "progress"; "s_reachBeginning": "reachBeginning"; "s_reachEnd": "reachEnd"; "s_realIndexChange": "realIndexChange"; "s_resize": "resize"; "s_scroll": "scroll"; "s_scrollbarDragEnd": "scrollbarDragEnd"; "s_scrollbarDragMove": "scrollbarDragMove"; "s_scrollbarDragStart": "scrollbarDragStart"; "s_setTransition": "setTransition"; "s_setTranslate": "setTranslate"; "s_slideChange": "slideChange"; "s_slideChangeTransitionEnd": "slideChangeTransitionEnd"; "s_slideChangeTransitionStart": "slideChangeTransitionStart"; "s_slideNextTransitionEnd": "slideNextTransitionEnd"; "s_slideNextTransitionStart": "slideNextTransitionStart"; "s_slidePrevTransitionEnd": "slidePrevTransitionEnd"; "s_slidePrevTransitionStart": "slidePrevTransitionStart"; "s_slideResetTransitionStart": "slideResetTransitionStart"; "s_slideResetTransitionEnd": "slideResetTransitionEnd"; "s_sliderMove": "sliderMove"; "s_sliderFirstMove": "sliderFirstMove"; "s_slidesLengthChange": "slidesLengthChange"; "s_slidesGridLengthChange": "slidesGridLengthChange"; "s_snapGridLengthChange": "snapGridLengthChange"; "s_snapIndexChange": "snapIndexChange"; "s_tap": "tap"; "s_toEdge": "toEdge"; "s_touchEnd": "touchEnd"; "s_touchMove": "touchMove"; "s_touchMoveOpposite": "touchMoveOpposite"; "s_touchStart": "touchStart"; "s_transitionEnd": "transitionEnd"; "s_transitionStart": "transitionStart"; "s_update": "update"; "s_zoomChange": "zoomChange"; "s_swiper": "swiper"; "indexChange": "indexChange"; }, ["slidesEl"], ["[slot=container-start]", "[slot=wrapper-start]", "[slot=wrapper-end]", "[slot=container-end]"]>;
}
