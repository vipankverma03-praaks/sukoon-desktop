import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.svg`
  margin:${props=> props.margin};
  position: ${props => props.position};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
  ${props => props.rotate ? 'transform: rotate(180deg);' : '' };
  display: ${props => props.display};`;

const icons = {
  arrow: {
    shape: (
      <g>
        <path
          className="st0"
          d="M0,14.2h39.3L29.4,4l3.9-4L50,17L33.3,34l-3.9-4l9.9-10.2H0V14.2z"
        />
      </g>
    ),
    viewBox: "0 0 50 34"
  },
  landLine: {
    shape: (
      <g>
        <path
          d="M25.989,12.274c8.663,0.085,14.09-0.454,14.823,9.148h10.564c0-14.875-12.973-16.88-25.662-16.88    c-12.69,0-25.662,2.005-25.662,16.88h10.482C11.345,11.637,17.398,12.19,25.989,12.274z"
        />
        <path
          d="M5.291,26.204c2.573,0,4.714,0.154,5.19-2.377c0.064-0.344,0.101-0.734,0.101-1.185H10.46H0    C0,26.407,2.369,26.204,5.291,26.204z"
        />
        <path
          d="M40.88,22.642h-0.099c0,0.454,0.039,0.845,0.112,1.185c0.502,2.334,2.64,2.189,5.204,2.189    c2.936,0,5.316,0.193,5.316-3.374H40.88z"
        />
        <path
          d="M35.719,20.078v-1.496c0-0.669-0.771-0.711-1.723-0.711h-1.555c-0.951,0-1.722,0.042-1.722,0.711
          v1.289v1h-11v-1v-1.289c0-0.669-0.771-0.711-1.722-0.711h-1.556c-0.951,0-1.722,0.042-1.722,0.711v1.496v1.306
          C12.213,23.988,4.013,35.073,3.715,36.415l0.004,8.955c0,0.827,0.673,1.5,1.5,1.5h40c0.827,0,1.5-0.673,1.5-1.5v-9
          c-0.295-1.303-8.493-12.383-11-14.987V20.078z M19.177,37.62c-0.805,0-1.458-0.652-1.458-1.458s0.653-1.458,1.458-1.458
          s1.458,0.652,1.458,1.458S19.982,37.62,19.177,37.62z M19.177,32.62c-0.805,0-1.458-0.652-1.458-1.458s0.653-1.458,1.458-1.458
          s1.458,0.652,1.458,1.458S19.982,32.62,19.177,32.62z M19.177,27.621c-0.805,0-1.458-0.652-1.458-1.458
          c0-0.805,0.653-1.458,1.458-1.458s1.458,0.653,1.458,1.458C20.635,26.969,19.982,27.621,19.177,27.621z M25.177,37.62
          c-0.805,0-1.458-0.652-1.458-1.458s0.653-1.458,1.458-1.458c0.806,0,1.458,0.652,1.458,1.458S25.983,37.62,25.177,37.62z
          M25.177,32.62c-0.805,0-1.458-0.652-1.458-1.458s0.653-1.458,1.458-1.458c0.806,0,1.458,0.652,1.458,1.458
          S25.983,32.62,25.177,32.62z M25.177,27.621c-0.805,0-1.458-0.652-1.458-1.458c0-0.805,0.653-1.458,1.458-1.458
          c0.806,0,1.458,0.653,1.458,1.458C26.635,26.969,25.983,27.621,25.177,27.621z M31.177,37.62c-0.806,0-1.458-0.652-1.458-1.458
          s0.652-1.458,1.458-1.458s1.458,0.652,1.458,1.458S31.983,37.62,31.177,37.62z M31.177,32.62c-0.806,0-1.458-0.652-1.458-1.458
          s0.652-1.458,1.458-1.458s1.458,0.652,1.458,1.458S31.983,32.62,31.177,32.62z M31.177,27.621c-0.806,0-1.458-0.652-1.458-1.458
          c0-0.805,0.652-1.458,1.458-1.458s1.458,0.653,1.458,1.458C32.635,26.969,31.983,27.621,31.177,27.621z"
        />
      </g>
    ),
    viewBox: "0 0 51.413 51.413"
  },
  helpline: {
    shape: (
      <g>
        <path className="st0"
              d="M476.5,949c248,0,449-201,449-449s-201-449-449-449v82.9c202.2,0,366.1,163.9,366.1,366.1   S678.7,866.1,476.5,866.1V949z"/>
        <g>
          <g>
            <path className="st0"
                  d="M391,894.8c-7.1,9.2-16.6,13.8-28.6,13.8l-140.5-0.5c-6.7,0.4-13.9-0.8-21.5-3.4     c-7.6-2.7-14.2-6.1-19.9-10.3c-0.4-0.4-1.5-1.3-3.5-2.9c-1.9-1.6-4.3-3.8-7.2-6.6c-6.7-6.7-16.4-18.7-29.2-36.1     c-12.7-17.3-25.4-41.4-38.2-72.1C89.8,745.8,78.7,707.6,69.2,662c-9.5-45.6-14.1-99.7-13.8-162.3c-0.4-49.1,2.5-93,8.5-131.5     c6-38.5,13.5-72.2,22.5-101c9-28.8,18.7-53.4,29.2-73.7s20.3-36.9,29.7-49.8s17.4-22.4,24.1-28.4c6.7-6,10.4-9.4,11.1-10.1     c5.7-4.2,12.3-7.7,19.9-10.3c7.6-2.7,14.8-3.8,21.5-3.4l141,0c9.9,0,18,3.2,24.4,9.5c4.6,4.6,7.3,10,8.2,16.2     c0.9,6.2,0.6,12.5-0.8,18.8l-50.9,164.4c-2.5,8.8-7.8,15.9-15.9,21.2c-8.1,5.3-16.8,8-26,8h-52c-1.4,0-3.2,0.5-5.3,1.6     c-2.1,1.1-3.7,2.1-4.8,3.2c-6,8.8-11.3,20.5-15.9,35c-4.2,12.7-8,29.6-11.4,50.6c-3.4,21-4.9,47.6-4.5,79.8     c-0.4,32.2,1.1,58.9,4.5,80.3c3.4,21.4,7.1,38.4,11.1,50.9s7.9,21.5,11.4,26.8l5.3,8c0.7,0.7,2.1,1.6,4.2,2.7     c2.1,1.1,3.9,1.6,5.3,1.6l61-0.5c12,0.7,22.3,5.3,30.8,13.8c6,6,9.7,11.8,11.1,17.5l0.5,0.5l41.9,162.8     C398.1,876.1,396.7,886.3,391,894.8z"/>
          </g>
        </g>
        <g>
          <path
            d="M476.6,460.8c0-17.6-7.6-26.4-22.9-26.4c-8.6,0-14.9,3-18.9,9c-4,6-6.2,15.4-6.6,28h-53.8c1.3-27.7,9.7-48.6,25.1-62.5    c15.5-14,35-21,58.7-21c24.7,0,43.4,6.2,55.9,18.7c12.6,12.5,18.9,28.7,18.9,48.7c0,22.1-8.5,43.8-25.5,64.9    c-17,21.2-37.3,39.1-60.9,53.7h89.9v44.5H374.1v-41.3C442.4,528.4,476.6,489.6,476.6,460.8z"/>
          <path
            d="M559.7,579.1V533l104.1-142.8h59.3v140.9h27.4v48h-27.4V621h-55.8v-41.9H559.7z M671.9,454.1l-56.1,77h56.1V454.1z"/>
        </g>
      </g>
    ),
    viewBox: "0 0 1000 1000"
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: "0 0 30 30"
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{" "}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: "0 0 30 42"
  },
  arrowDown: {
    shape: (
      <>
        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
      </>
    ),
    viewBox: "0 0 129 129"
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: "0 0 30 44.58"
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: "0 0 30 30"
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: "0 0 30 30"
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: "0 0 100 100"
  }
};

const SVG = ({ Class,rotate,stroke, fill, width,margin, icon, left, top, position,hiddenMobile,display }) => (
  <Wrapper
    position={position}
    viewBox={icons[icon].viewBox}
    margin={margin}
    stroke={stroke}
    fill={fill}
    svgWidth={width}
    left={left}
    top={top}
    rotate={rotate}
    hiddenMobile={hiddenMobile}
    display={display}
    className={Class}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  position: PropTypes.string,
  hiddenMobile: PropTypes.bool,
  display: PropTypes.string,
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: '100%',
  fill: 'none',
  left: '0%',
  top: '0%',
  position: 'static',
  hiddenMobile: false,
  display: 'block',
};
