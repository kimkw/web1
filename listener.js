function addListener(elem, ev, listener){
    if(elem.addEventListener){
        elem.addEventListener(ev, listener, false);
    }else if( elem.attachEvent){
        elem.attachEvent('on' + ev, listener);
    }else{
        throw new Error('이벤트 리스너에 미대응입니다.');
    }
}

function removeListener(elem, ev, listener){
    if(elem.removeListener){
        elem.removeListener(ev,listener,false);
    }else if( elem.detachEvent){
        elem.detachEvent('on' + ev, listener);
    }else{
        throw new Error('이벤트 리스너에 미대응입니다.');
    }
}

function cancelBubbling(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else if(window.event){
        window.event.cancelBubble = true;
    }
}

function cacelEvent(e){
    if(e.preventDefault){
        e.preventDefault();
    }else if(window.event){
        window.event.returnValue = false;
    }
}