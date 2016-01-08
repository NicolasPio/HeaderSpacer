/**
 * HeaderSpacer
 * Save space in mobile screen hiding header
 *
 * @author Nicolas Pio <nicolaspiof@gmail.com>
 */
;(function (window) {
    'use strict';

    window.HeaderSpacer = {
      header: document.querySelector('[data-header-spacer]'),
      transition: 'all 0.2s ease-out'
    };

    HeaderSpacer.init = function () {

      window.addEventListener('scroll', this.check.bind(this));
    };

    HeaderSpacer.check = function () {

      if (this.scrollTop === undefined) {
        this.scrollTop = window.scrollY;
        return;
      }

      if (window.scrollY <= this.header.clientHeight) {
        return;
      }

      if(window.scrollY >= this.scrollTop) {
        this.hide();
      } else {
        this.show();
      }

      this.scrollTop = window.scrollY;
    }

    HeaderSpacer.hide = function () {

        try {
          this.header.style.transition = this.transition;
          this.header.style.willChange = 'transform';
          this.header.style.transform = 'translateY(-100%)';
        } catch (e) {
          throw new Error('Header not found');
        }
    }

    HeaderSpacer.show = function () {

        try {
          this.header.style.transition = this.transition;
          this.header.style.willChange = 'transform';
          this.header.style.transform = 'translateY(0)';
        } catch (e) {
            throw new Error('Header not found');
        }
    }

    HeaderSpacer.init();
})(window);
