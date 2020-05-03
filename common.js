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
