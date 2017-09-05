'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Progress = require('material-ui/Progress');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _colors = require('material-ui/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasmirmotahari/Dropbox/web-development/code/reactvancouver/pages/index.js?entry';

// Components


// Material UI Components


// Picatic Requests
var picaticHost = 'https://api.picatic.com/v2';
var picaticLimit = '&page[limit]=10&page[offset]=0';

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          picture = _props.picture,
          event = _props.event,
          sponsors = _props.sponsors;

      // Pass new image to background

      var style = {
        backgroundImage: 'url(' + picture + ')',
        backgroundSize: 'cover'
      };

      var noEvent = event === undefined;
      if (noEvent) {
        return _react2.default.createElement('div', { className: 'hero-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement(_Progress.CircularProgress, { className: 'mx-auto', size: 50, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }));
      }

      // Reformat event day
      var eventDay = (0, _moment2.default)(event.attributes.start_date).format('MMMM Do, YYYY');

      var googleMapsLink = 'http://maps.google.com/?q=' + event.attributes.venue_name + ' ' + event.attributes.venue_street;

      var hasSponsors = sponsors.length !== 0;

      return _react2.default.createElement(_Layout2.default, { title: 'React September Meetup | React Vancouver', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('div', { className: 'app-img', style: style, 'data-jsx': 1670590780,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', { className: 'app-overlay', 'data-jsx': 1670590780,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement('section', { className: 'container', 'data-jsx': 1670590780,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('section', { className: 'hero-content', 'data-jsx': 1670590780,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_Grid2.default, { container: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display3', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, event.attributes.title)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display1', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, eventDay)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_Button2.default, {
        href: 'https://www.picatic.com/' + event.id,
        raised: true,
        color: 'primary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Get Tickets')), hasSponsors && _react2.default.createElement(_Grid2.default, {
        container: true,
        align: 'center',
        justify: 'center',
        className: 'sponsors',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, sponsors.map(function (sponsor) {
        var _sponsor$attributes = sponsor.attributes,
            name = _sponsor$attributes.name,
            external_url = _sponsor$attributes.external_url,
            image_uri = _sponsor$attributes.image_uri;

        return _react2.default.createElement(_Grid2.default, { item: true, key: sponsor.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react2.default.createElement(_Button2.default, { href: external_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement('img', {
          src: image_uri,
          alt: name,
          className: 'img-fluid',
          'data-jsx': 1670590780,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        })));
      }))))), _react2.default.createElement(_style2.default, {
        styleId: 1670590780,
        css: '.app-img[data-jsx="1670590780"]{text-align:center;min-height:100vh}.app-overlay[data-jsx="1670590780"]{background-color:#3f51b5;min-height:100vh;opacity:0.4;position:absolute;width:100%}.hero-content[data-jsx="1670590780"]{min-height:calc(100vh - 100px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:800px){.sponsors[data-jsx="1670590780"]{position:absolute;bottom:0;left:0}}.img-fluid[data-jsx="1670590780"]{max-height:50px;max-width:200px}@media (max-width:750px){.sponsors[data-jsx="1670590780"]{padding-top:3rem}.img-fluid[data-jsx="1670590780"]{max-height:25px;max-width:100px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIYSxBQUdtQyxBQUtPLEFBUU0sQUFPWCxBQU9KLEFBTUcsQUFHRCxnQkFSRixBQVNFLENBSGxCLENBakNpQixBQW9CTixPQWZNLEVBZ0JSLElBUkksQ0FlZixBQVNFLEVBZkEsQ0FyQkYsT0FLYyxZQUNNLGtCQUNQLFdBQ2Isc0JBS3FCLDZGQUNyQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhvbWFzbWlybW90YWhhcmkvRHJvcGJveC93ZWItZGV2ZWxvcG1lbnQvY29kZS9yZWFjdHZhbmNvdXZlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbi8vIE1hdGVyaWFsIFVJIENvbXBvbmVudHNcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdtYXRlcmlhbC11aS9Qcm9ncmVzcydcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSdcbmltcG9ydCBHcmlkIGZyb20gJ21hdGVyaWFsLXVpL0dyaWQnXG5pbXBvcnQgeyBwaW5rIH0gZnJvbSAnbWF0ZXJpYWwtdWkvY29sb3JzJ1xuXG4vLyBQaWNhdGljIFJlcXVlc3RzXG5jb25zdCBwaWNhdGljSG9zdCA9ICdodHRwczovL2FwaS5waWNhdGljLmNvbS92MidcbmNvbnN0IHBpY2F0aWNMaW1pdCA9ICcmcGFnZVtsaW1pdF09MTAmcGFnZVtvZmZzZXRdPTAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCB1bnNwbGFzaFJhbmRvbSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jYXRlZ29yeS9uYXR1cmUvMjg4MHgxODAwJ1xuICAgIClcbiAgICBjb25zdCBwaWN0dXJlID0gdW5zcGxhc2hSYW5kb20udXJsXG5cbiAgICBjb25zdCBldmVudElkID0gMTE5NDQ0XG5cbiAgICBjb25zdCBnZXRFdmVudCA9IGF3YWl0IGZldGNoKGAke3BpY2F0aWNIb3N0fS9ldmVudC8ke2V2ZW50SWR9YClcbiAgICBjb25zdCBldmVudEpTT04gPSBhd2FpdCBnZXRFdmVudC5qc29uKClcbiAgICBjb25zdCBldmVudCA9IGF3YWl0IGV2ZW50SlNPTi5kYXRhXG5cbiAgICBjb25zdCBnZXRTcG9uc29ycyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7cGljYXRpY0hvc3R9L3Nwb25zb3I/ZmlsdGVyW2V2ZW50X2lkXT0ke2V2ZW50SWR9JHtwaWNhdGljTGltaXR9YFxuICAgIClcbiAgICBjb25zdCBzcG9uc29yc0pTT04gPSBhd2FpdCBnZXRTcG9uc29ycy5qc29uKClcbiAgICBjb25zdCBzcG9uc29ycyA9IGF3YWl0IHNwb25zb3JzSlNPTi5kYXRhXG5cbiAgICByZXR1cm4geyBwaWN0dXJlLCBldmVudCwgc3BvbnNvcnMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGljdHVyZSwgZXZlbnQsIHNwb25zb3JzIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBQYXNzIG5ldyBpbWFnZSB0byBiYWNrZ3JvdW5kXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaWN0dXJlfSlgLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9XG5cbiAgICBjb25zdCBub0V2ZW50ID0gZXZlbnQgPT09IHVuZGVmaW5lZFxuICAgIGlmIChub0V2ZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudFwiPlxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBzaXplPXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gUmVmb3JtYXQgZXZlbnQgZGF5XG4gICAgY29uc3QgZXZlbnREYXkgPSBtb21lbnQoZXZlbnQuYXR0cmlidXRlcy5zdGFydF9kYXRlKS5mb3JtYXQoJ01NTU0gRG8sIFlZWVknKVxuXG4gICAgY29uc3QgZ29vZ2xlTWFwc0xpbmsgPSBgaHR0cDovL21hcHMuZ29vZ2xlLmNvbS8/cT0ke2V2ZW50LmF0dHJpYnV0ZXNcbiAgICAgIC52ZW51ZV9uYW1lfSAke2V2ZW50LmF0dHJpYnV0ZXMudmVudWVfc3RyZWV0fWBcblxuICAgIGNvbnN0IGhhc1Nwb25zb3JzID0gc3BvbnNvcnMubGVuZ3RoICE9PSAwXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIlJlYWN0IFNlcHRlbWJlciBNZWV0dXAgfCBSZWFjdCBWYW5jb3V2ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaW1nXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1vdmVybGF5XCIgLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8tY29udGVudFwiPlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdHlwZT1cImRpc3BsYXkzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudC5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB0eXBlPVwiZGlzcGxheTFcIj57ZXZlbnREYXl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5waWNhdGljLmNvbS8ke2V2ZW50LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHZXQgVGlja2V0c1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAge2hhc1Nwb25zb3JzICYmIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcG9uc29yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzcG9uc29ycy5tYXAoc3BvbnNvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsX3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX3VyaVxuICAgICAgICAgICAgICAgICAgICAgIH0gPSBzcG9uc29yLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e3Nwb25zb3IuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2V4dGVybmFsX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZV91cml9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFwcC1pbWcge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hcHAtb3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlcm8tY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAuc3BvbnNvcnMge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW1nLWZsdWlkIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgICAgICAgICAuc3BvbnNvcnMge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWctZmx1aWQge1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3dpZGdldC5waWNhdGljLmNvbS9sYXRlc3QvanMvZW1iZWQubWluLmpzJ1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWVcbiAgICBzY3JpcHQuaWQgPSAncGljYXRpYy13aWRnZXQtc2NyaXB0J1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var script = document.createElement('script');

      script.src = 'https://widget.picatic.com/latest/js/embed.min.js';
      script.async = true;
      script.id = 'picatic-widget-script';

      return document.body.appendChild(script);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var unsplashRandom, picture, eventId, getEvent, eventJSON, event, getSponsors, sponsorsJSON, sponsors;
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
                _context.next = 10;
                return getEvent.json();

              case 10:
                eventJSON = _context.sent;
                _context.next = 13;
                return eventJSON.data;

              case 13:
                event = _context.sent;
                _context.next = 16;
                return (0, _isomorphicFetch2.default)(picaticHost + '/sponsor?filter[event_id]=' + eventId + picaticLimit);

              case 16:
                getSponsors = _context.sent;
                _context.next = 19;
                return getSponsors.json();

              case 19:
                sponsorsJSON = _context.sent;
                _context.next = 22;
                return sponsorsJSON.data;

              case 22:
                sponsors = _context.sent;
                return _context.abrupt('return', { picture: picture, event: event, sponsors: sponsors });

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJtb21lbnQiLCJMYXlvdXQiLCJDaXJjdWxhclByb2dyZXNzIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJwaW5rIiwicGljYXRpY0hvc3QiLCJwaWNhdGljTGltaXQiLCJwcm9wcyIsInBpY3R1cmUiLCJldmVudCIsInNwb25zb3JzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIm5vRXZlbnQiLCJ1bmRlZmluZWQiLCJldmVudERheSIsImF0dHJpYnV0ZXMiLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZ29vZ2xlTWFwc0xpbmsiLCJ2ZW51ZV9uYW1lIiwidmVudWVfc3RyZWV0IiwiaGFzU3BvbnNvcnMiLCJsZW5ndGgiLCJ0aXRsZSIsImlkIiwibWFwIiwic3BvbnNvciIsIm5hbWUiLCJleHRlcm5hbF91cmwiLCJpbWFnZV91cmkiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVuc3BsYXNoUmFuZG9tIiwidXJsIiwiZXZlbnRJZCIsImdldEV2ZW50IiwianNvbiIsImV2ZW50SlNPTiIsImRhdGEiLCJnZXRTcG9uc29ycyIsInNwb25zb3JzSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFPOzs7O0FBR1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7QUFSVDs7O0FBR0E7OztBQU9BO0FBQ0EsSUFBTSxjQUFOLEFBQW9CO0FBQ3BCLElBQU0sZUFBTixBQUFxQjs7Ozs7Ozs7Ozs7Ozs2QkF3QlY7bUJBQzhCLEtBRDlCLEFB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R0s7Ozs7eUNBc0dlLEFBQ25CO1VBQU0sU0FBUyxTQUFBLEFBQVMsY0FBeEIsQUFBZSxBQUF1QixBQUV0Qzs7YUFBQSxBQUFPLE1BQVAsQUFBYSxBQUNiO2FBQUEsQUFBTyxRQUFQLEFBQWUsQUFDZjthQUFBLEFBQU8sS0FBUCxBQUFZLEFBRVo7O2FBQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxZQUFyQixBQUFPLEFBQTBCLEFBQ2xDOzs7Ozs7Ozs7Ozs7dUJBOUo4QiwrQkFBQSxBLEFBQzNCOzttQkFESTtBLDBDQUdBO0EsMEJBQVUsZUFBZSxBQUV6QixBO0EsMEJBQVUsQTs7dUJBRU8sK0JBQUEsQUFBUywwQkFBVCxBQUE4QixBOzttQkFBL0M7QTs7dUJBQ2tCLFNBQVMsQSxBQUFUOzttQkFBbEI7QTs7dUJBQ2MsVUFBVSxBOzttQkFBeEI7QTs7dUJBRW9CLCtCQUFBLEFBQ3JCLDZDQURxQixBQUNtQixVQURuQixBLEFBQzZCOzttQkFEakQ7QTs7dUJBR3FCLFlBQUEsQUFBWSxBOzttQkFBakM7QTs7dUJBQ2lCLGFBQWEsQTs7bUJBQTlCO0E7aURBRUMsRUFBRSxTQUFGLFNBQVcsT0FBWCxPQUFrQixVQUFsQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbkJrQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aG9tYXNtaXJtb3RhaGFyaS9Ecm9wYm94L3dlYi1kZXZlbG9wbWVudC9jb2RlL3JlYWN0dmFuY291dmVyIn0=