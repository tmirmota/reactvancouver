webpackHotUpdate(5,{

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(112);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(113);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(31);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(32);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(717);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = __webpack_require__(718);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _moment = __webpack_require__(554);

var _moment2 = _interopRequireDefault(_moment);

var _Progress = __webpack_require__(721);

var _Button = __webpack_require__(770);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(785);

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = __webpack_require__(788);

var _Grid2 = _interopRequireDefault(_Grid);

var _colors = __webpack_require__(802);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasmirmotahari/Dropbox/web-development/code/reactvancouver/pages/index.js?entry';

// Material UI Components


// Picatic Requests
var picaticHost = 'https://api.picatic.com/v2';
var picaticLimit = '&page[limit]=10&page[offset]=0';

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      picaticId: 664654,
      event: null,
      eventId: 119444,
      tickets: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          picatic = _props.picatic,
          event = _props.event,
          sponsors = _props.sponsors;

      // Pass new image to background

      var style = {
        backgroundImage: 'url(' + backgroundUrl + ')',
        backgroundSize: 'cover'

        // Return nothing if the event has not yet loaded
      };var noEvent = event === null;
      if (noEvent) {
        return _react2.default.createElement('div', { className: 'hero-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement(_Progress.CircularProgress, { className: 'mx-auto', size: 50, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }));
      }

      // Reformat event day
      var eventDay = (0, _moment2.default)(event.attributes.start_date).format('MMMM Do, YYYY');

      // Search for venue in google maps
      var venueMap = 'http://maps.google.com/?q=' + event.attributes.venue_name + ' ' + event.attributes.venue_street;

      // If sponsors
      // const hasSponsors = sponsors.length !== 0
      var hasSponsors = false;

      return _react2.default.createElement('div', { className: 'app-img', style: style, 'data-jsx': 895030844,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, stylesheet, _react2.default.createElement('div', { className: 'app-overlay', 'data-jsx': 895030844,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement('section', { className: 'container', 'data-jsx': 895030844,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('section', { className: 'hero-content', 'data-jsx': 895030844,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_Grid2.default, { container: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display3', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, event.attributes.title)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display1', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, eventDay)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_Button2.default, {
        href: 'https://www.picatic.com/' + event.id,
        raised: true,
        color: 'primary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Join Wait List')), hasSponsors && _react2.default.createElement(_Grid2.default, {
        container: true,
        align: 'center',
        justify: 'center',
        className: 'sponsors',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, sponsors.map(function (sponsor) {
        var _sponsor$attributes = sponsor.attributes,
            name = _sponsor$attributes.name,
            external_url = _sponsor$attributes.external_url,
            image_uri = _sponsor$attributes.image_uri;

        return _react2.default.createElement(_Grid2.default, { item: true, key: sponsor.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement(_Button2.default, { href: external_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, _react2.default.createElement('img', {
          src: image_uri,
          alt: name,
          className: 'img-fluid',
          'data-jsx': 895030844,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        })));
      }))))), _react2.default.createElement(_style2.default, {
        styleId: 895030844,
        css: '.app-img[data-jsx="895030844"]{text-align:center;min-height:100vh}.app-overlay[data-jsx="895030844"]{background-color:#3f51b5;min-height:100vh;opacity:0.4;position:absolute;width:100%}.hero-content[data-jsx="895030844"]{min-height:calc(100vh - 100px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:800px){.sponsors[data-jsx="895030844"]{position:absolute;bottom:0;left:0}}.img-fluid[data-jsx="895030844"]{max-height:50px;max-width:200px}@media (max-width:750px){.sponsors[data-jsx="895030844"]{padding-top:3rem}.img-fluid[data-jsx="895030844"]{max-height:25px;max-width:100px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIVyxBQUdpQyxBQUtPLEFBUU0sQUFPWCxBQU9KLEFBTUcsQUFHRCxnQkFSRixBQVNFLENBSGxCLENBakNpQixBQW9CTixPQWZNLEVBZ0JSLElBUkksQ0FlZixBQVNFLEVBZkEsQ0FyQkYsT0FLYyxZQUNNLGtCQUNQLFdBQ2Isc0JBS3FCLDZGQUNyQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhvbWFzbWlybW90YWhhcmkvRHJvcGJveC93ZWItZGV2ZWxvcG1lbnQvY29kZS9yZWFjdHZhbmNvdXZlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbi8vIE1hdGVyaWFsIFVJIENvbXBvbmVudHNcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdtYXRlcmlhbC11aS9Qcm9ncmVzcydcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSdcbmltcG9ydCBHcmlkIGZyb20gJ21hdGVyaWFsLXVpL0dyaWQnXG5pbXBvcnQgeyBwaW5rIH0gZnJvbSAnbWF0ZXJpYWwtdWkvY29sb3JzJ1xuXG4vLyBQaWNhdGljIFJlcXVlc3RzXG5jb25zdCBwaWNhdGljSG9zdCA9ICdodHRwczovL2FwaS5waWNhdGljLmNvbS92MidcbmNvbnN0IHBpY2F0aWNMaW1pdCA9ICcmcGFnZVtsaW1pdF09MTAmcGFnZVtvZmZzZXRdPTAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCB1bnNwbGFzaFJhbmRvbSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jYXRlZ29yeS9uYXR1cmUvMjg4MHgxODAwJ1xuICAgIClcbiAgICBjb25zdCBwaWN0dXJlID0gdW5zcGxhc2hSYW5kb20udXJsXG5cbiAgICBjb25zdCBldmVudElkID0gMTE5NDQ0XG5cbiAgICBjb25zdCBnZXRFdmVudCA9IGF3YWl0IGZldGNoKGAke3BpY2F0aWNIb3N0fS9ldmVudC8ke2V2ZW50SWR9YClcbiAgICBjb25zdCBldmVudEpTT04gPSBnZXRFdmVudC5qc29uKClcbiAgICBjb25zdCBldmVudCA9IGV2ZW50SlNPTi5kYXRhXG5cbiAgICBjb25zdCBnZXRTcG9uc29ycyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7cGljYXRpY0hvc3R9L3Nwb25zb3I/ZmlsdGVyW2V2ZW50X2lkXT0ke2V2ZW50SWR9JHtwaWNhdGljTGltaXR9YFxuICAgIClcbiAgICBjb25zdCBzcG9uc29ySlNPTiA9IGdldFNwb25zb3JzLmpzb24oKVxuICAgIGNvbnN0IHNwb25zb3JzID0gc3BvbnNvckpTT04uZGF0YVxuXG4gICAgcmV0dXJuIHsgcGljdHVyZSwgZXZlbnQsIHNwb25zb3JzIH1cbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBwaWNhdGljSWQ6IDY2NDY1NCxcbiAgICBldmVudDogbnVsbCxcbiAgICBldmVudElkOiAxMTk0NDQsXG4gICAgdGlja2V0czogW11cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBpY2F0aWMsIGV2ZW50LCBzcG9uc29ycyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gUGFzcyBuZXcgaW1hZ2UgdG8gYmFja2dyb3VuZFxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZFVybH0pYCxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG5vdGhpbmcgaWYgdGhlIGV2ZW50IGhhcyBub3QgeWV0IGxvYWRlZFxuICAgIGNvbnN0IG5vRXZlbnQgPSBldmVudCA9PT0gbnVsbFxuICAgIGlmIChub0V2ZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudFwiPlxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBzaXplPXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gUmVmb3JtYXQgZXZlbnQgZGF5XG4gICAgY29uc3QgZXZlbnREYXkgPSBtb21lbnQoZXZlbnQuYXR0cmlidXRlcy5zdGFydF9kYXRlKS5mb3JtYXQoJ01NTU0gRG8sIFlZWVknKVxuXG4gICAgLy8gU2VhcmNoIGZvciB2ZW51ZSBpbiBnb29nbGUgbWFwc1xuICAgIGNvbnN0IHZlbnVlTWFwID0gYGh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JHtldmVudC5hdHRyaWJ1dGVzXG4gICAgICAudmVudWVfbmFtZX0gJHtldmVudC5hdHRyaWJ1dGVzLnZlbnVlX3N0cmVldH1gXG5cbiAgICAvLyBJZiBzcG9uc29yc1xuICAgIC8vIGNvbnN0IGhhc1Nwb25zb3JzID0gc3BvbnNvcnMubGVuZ3RoICE9PSAwXG4gICAgY29uc3QgaGFzU3BvbnNvcnMgPSBmYWxzZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWltZ1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIHtzdHlsZXNoZWV0fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1vdmVybGF5XCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyby1jb250ZW50XCI+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB0eXBlPVwiZGlzcGxheTNcIj5cbiAgICAgICAgICAgICAgICAgIHtldmVudC5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdHlwZT1cImRpc3BsYXkxXCI+e2V2ZW50RGF5fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnBpY2F0aWMuY29tLyR7ZXZlbnQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBKb2luIFdhaXQgTGlzdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAge2hhc1Nwb25zb3JzICYmIChcbiAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwb25zb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3BvbnNvcnMubWFwKHNwb25zb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIGV4dGVybmFsX3VybCwgaW1hZ2VfdXJpIH0gPSBzcG9uc29yLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17c3BvbnNvci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2V4dGVybmFsX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlX3VyaX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYXBwLWltZyB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hcHAtb3ZlcmxheSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZXJvLWNvbnRlbnQge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgLnNwb25zb3JzIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltZy1mbHVpZCB7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgICAgICAuc3BvbnNvcnMge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5pbWctZmx1aWQge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var unsplashRandom, picture, eventId, getEvent, eventJSON, event, getSponsors, sponsorJSON, sponsors;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://source.unsplash.com/category/nature/2880x1800');

              case 2:
                unsplashRandom = _context.sent;
                picture = unsplashRandom.url;
                eventId = 119444;
                _context.next = 7;
                return (0, _isomorphicFetch2.default)(picaticHost + '/event/' + eventId);

              case 7:
                getEvent = _context.sent;
                eventJSON = getEvent.json();
                event = eventJSON.data;
                _context.next = 12;
                return (0, _isomorphicFetch2.default)(picaticHost + '/sponsor?filter[event_id]=' + eventId + picaticLimit);

              case 12:
                getSponsors = _context.sent;
                sponsorJSON = getSponsors.json();
                sponsors = sponsorJSON.data;
                return _context.abrupt('return', { picture: picture, event: event, sponsors: sponsors });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJtb21lbnQiLCJDaXJjdWxhclByb2dyZXNzIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJwaW5rIiwicGljYXRpY0hvc3QiLCJwaWNhdGljTGltaXQiLCJzdGF0ZSIsInBpY2F0aWNJZCIsImV2ZW50IiwiZXZlbnRJZCIsInRpY2tldHMiLCJwcm9wcyIsInBpY2F0aWMiLCJzcG9uc29ycyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFVybCIsImJhY2tncm91bmRTaXplIiwibm9FdmVudCIsImV2ZW50RGF5IiwiYXR0cmlidXRlcyIsInN0YXJ0X2RhdGUiLCJmb3JtYXQiLCJ2ZW51ZU1hcCIsInZlbnVlX25hbWUiLCJ2ZW51ZV9zdHJlZXQiLCJoYXNTcG9uc29ycyIsInN0eWxlc2hlZXQiLCJ0aXRsZSIsImlkIiwibWFwIiwic3BvbnNvciIsIm5hbWUiLCJleHRlcm5hbF91cmwiLCJpbWFnZV91cmkiLCJ1bnNwbGFzaFJhbmRvbSIsInBpY3R1cmUiLCJ1cmwiLCJnZXRFdmVudCIsImV2ZW50SlNPTiIsImpzb24iLCJkYXRhIiwiZ2V0U3BvbnNvcnMiLCJzcG9uc29ySlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7Ozs7OztBQUxUOzs7QUFPQTtBQUNBLElBQU0sY0FBTixBQUFvQjtBQUNwQixJQUFNLGVBQU4sQUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7NE1BdUJuQixBO2lCQUFRLEFBQ0ssQUFDWDthQUZNLEFBRUMsQUFDUDtlQUhNLEFBR0csQUFDVDtlQUpNLEFBSUcsQTtBQUpILEFBQ047Ozs7OzZCQU1PO21CQUM4QixLQUQ5QixBQUNtQztVQURuQyxBQUNDLGlCQURELEFBQ0M7VUFERCxBQUNVLGVBRFYsQUFDVTtVQURWLEFBQ2lCLGtCQURqQixBQUNpQixBQUV4Qjs7QUFDQTs7VUFBTTtrQ0FDSixBQUF3QixnQkFEWixBQUVaO3dCQUFnQixBQUdsQjs7QUFMQSxBQUFjO0FBQUEsQUFDWixRQUtGLElBQU0sVUFBVSxVQUFoQixBQUEwQixBQUMxQjtVQUFBLEFBQUksU0FBUyxBQUNYOytCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyw0Q0FBaUIsV0FBbEIsQUFBNEIsV0FBVSxNQUF0QyxBQUE0QztzQkFBNUM7d0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7QUFLTjs7QUFDQTtVQUFNLFdBQVcsc0JBQU8sTUFBQSxBQUFNLFdBQWIsQUFBd0IsWUFBeEIsQUFBb0MsT0FBckQsQUFBaUIsQUFBMkMsQUFFNUQ7O0FBQ0E7VUFBTSwwQ0FBd0MsTUFBQSxBQUFNLFdBQTlDLEFBQ0gsbUJBQWMsTUFBQSxBQUFNLFdBRHZCLEFBQ2tDLEFBRWxDOztBQUNBO0FBQ0E7VUFBTSxjQUFOLEFBQW9CLEFBRXBCOzs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLFdBQVUsT0FBekIsQUFBZ0MsbUJBQWhDOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7T0FBQSxFQUFBLEFBRUUsbURBQUssV0FBTCxBQUFlLDJCQUFmOztvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLGFBQVMsV0FBVCxBQUFtQix5QkFBbkI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLGFBQVMsV0FBVCxBQUFtQiw0QkFBbkI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGdDQUFLLFdBQU47b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsZ0NBQUssTUFBTixNQUFXLElBQVgsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNHO0FBREg7ZUFDRyxBQUFNLFdBSGIsQUFDRSxBQUNFLEFBQ29CLEFBR3RCLHlCQUFBLEFBQUMsZ0NBQUssTUFBTixNQUFXLElBQVgsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO29CQUFqQjtzQkFBQSxBQUE2QjtBQUE3QjtTQVBKLEFBTUUsQUFDRSxBQUVGLDRCQUFBLEFBQUMsZ0NBQUssTUFBTixNQUFXLElBQVgsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzsyQ0FDa0MsTUFEbkMsQUFDeUMsQUFDdkM7Z0JBRkYsQUFHRTtlQUhGLEFBR1E7O29CQUhSO3NCQUFBO0FBQUE7QUFDRSxTQVhOLEFBU0UsQUFDRSxBQVNELG1EQUNDLEFBQUM7bUJBQUQsQUFFRTtlQUZGLEFBRVEsQUFDTjtpQkFIRixBQUdVLEFBQ1I7bUJBSkYsQUFJWTs7b0JBSlo7c0JBQUEsQUFNRztBQU5IO0FBQ0UsT0FERixXQU1HLEFBQVMsSUFBSSxtQkFBVztrQ0FDbUIsUUFEbkIsQUFDMkI7WUFEM0IsQUFDZiwyQkFEZSxBQUNmO1lBRGUsQUFDVCxtQ0FEUyxBQUNUO1lBRFMsQUFDSyxnQ0FETCxBQUNLLEFBQzVCOzsrQkFDRSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxLQUFLLFFBQWhCLEFBQXdCO3NCQUF4Qjt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxBQUFDLGtDQUFPLE1BQVIsQUFBYyxjQUFjLFFBQTVCLEFBQW1DO3NCQUFuQzt3QkFBQSxBQUNFO0FBREY7O2VBQ0UsQUFDTyxBQUNMO2VBRkYsQUFFTyxBQUNMO3FCQUhGLEFBR1k7c0JBSFo7O3NCQUFBO3dCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBUVA7QUFSTztBQUNFO0FBckN0QixBQUdFLEFBQ0UsQUFDRSxBQW9CSSxBQU1HO2lCQS9CYjthQURGLEFBQ0UsQUFpR0g7QUFqR0c7Ozs7Ozs7Ozs7Ozt1QkF6RDJCLCtCQUFBLEFBQzNCLEE7O21CQURJO0EsMENBR0E7QSwwQkFBVSxlLEFBQWUsQUFFekI7QSwwQkFBVSxBOzt1QkFFTywrQkFBQSxBQUFTLDBCQUFULEEsQUFBOEI7O21CQUEvQztBLG9DQUNBO0EsNEJBQVksU0FBQSxBQUFTLEEsQUFDckI7QSx3QkFBUSxVQUFVLEE7O3VCQUVFLCtCQUFBLEFBQ3JCLDZDQURxQixBQUNtQixVQURuQixBQUM2QixBOzttQkFEakQ7QSx1Q0FHQTtBLDhCQUFjLFlBQUEsQUFBWSxBLEFBQzFCO0EsMkJBQVcsWSxBQUFZO2lEQUV0QixFQUFFLFNBQUYsU0FBVyxPQUFYLE9BQWtCLFVBQWxCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQmtCLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Rob21hc21pcm1vdGFoYXJpL0Ryb3Bib3gvd2ViLWRldmVsb3BtZW50L2NvZGUvcmVhY3R2YW5jb3V2ZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasmirmotahari/Dropbox/web-development/code/reactvancouver/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasmirmotahari/Dropbox/web-development/code/reactvancouver/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42NmQwZWIyZjUzODJkZGExNDdlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/ZWYzMzZjNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFOQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUhBOztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQU5BO0FBL0JBO0FBaUdBO0FBakdBOzs7Ozs7Ozs7Ozs7QUF6REE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==