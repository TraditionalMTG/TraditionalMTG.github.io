function readSource(e) {
    postEvent(e, 'research');
}

function readDeck(e) {
    postEvent(e, 'deck');
}

function postEvent(e, type) {
    gtag('event', 'read_source', {
        'event_category': type,
        'event_label': e.currentTarget.href,
        'value': 1
    })
}

function attachClickListener(listener) {
    return function(it) {
        it.addEventListener('click', listener)
    }
}

(function(){
    let scrolled = false;
    let clicked = false;
    function onscrollFunc(e) {
        if(scrolled === false && e.isTrusted === false) {
            gtag('event', 'fake_tracker', {
                'event_category': 'fakes',
                'event_label': 'fake user',
                'value': 1
            });
        }
        scrolled = true;
    }
    function onclickFunc(e) {
        if(clicked === false && e.isTrusted === false) {
            gtag('event', 'fake_tracker', {
                'event_category': 'fakes',
                'event_label': 'fake user',
                'value': 1
            });
        }
        clicked = true;
    }
    window.addEventListener('scroll', onscrollFunc);
    window.addEventListener('click', onclickFunc);
})()
