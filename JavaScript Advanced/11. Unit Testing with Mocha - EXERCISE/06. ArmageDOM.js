let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}



describe('armagedom', () => {
    let oldHTML;
    let htmlSelector;
    
    beforeEach('body', () => {
        document.body.innerHTML = `<div id="target">
            <div class="nested target">
                <p>This is some text</p>
            </div>
            <div class="target">
                <p>Empty div</p>
            </div>
            <div class="inside">
                <span class="nested">Some more text</span>
                <span class="target">Some more text</span>
            </div>
        </div>`;

        htmlSelector = $('#target');
        oldHTML = htmlSelector.html();
    });

    it('should not remove with invalid selector', () => {
        nuke(htmlSelector, 5);
        assert.equal(htmlSelector.html(), oldHTML);
    });

    it('should not remove with duplicate selector', () => {
        let selector1 = $('.nested');
        nuke(selector1, selector1);
        assert.equal(htmlSelector.html(), oldHTML);
    });

    it('should not remove with two valid selectors', () => {
        let selector1 = $('.nested');
        let selector2 = $('.inside')
        nuke(selector1, selector2);
        assert.equal(htmlSelector.html(), oldHTML);
    });

    it('should remove with valid selectors', () => {
        let selector1 = $('.nested');
        let selector2 = $('.target')
        nuke(selector1, selector2);
        assert.notEqual(htmlSelector.html(), oldHTML);
    });
});
