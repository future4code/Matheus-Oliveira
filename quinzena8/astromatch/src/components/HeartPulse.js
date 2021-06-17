import React from 'react';
import styled from 'styled-components';
import DisplayFlexCenter from '../themes/display/DisplayFlexCenter'

const HeartContainer = styled.div`
  ${DisplayFlexCenter}
  height: 100%;

  .heart {
    background: #762D93;
    position: relative;
    height: 100px;
    width: 100px;
    transform: rotate(-45deg) scale(1);
    animation: pulse 1s linear infinite;
}

@keyframes pulse {
	0% {
		transform: rotate(-45deg) scale(1);
	}
	
	10% {
		transform: rotate(-45deg) scale(1.1);
	}
	
	20% {
		transform: rotate(-45deg) scale(0.9);
	}
	
	30% {
		transform: rotate(-45deg) scale(1.2);
	}

	40% {
		transform: rotate(-45deg) scale(0.9);
	}

	50% {
		transform: rotate(-45deg) scale(1.05);
	}

	60% {
		transform: rotate(-45deg) scale(0.95);
	}

	70% {
		transform: rotate(-45deg) scale(1);
	}
}

.heart::after {
	background: inherit;
	border-radius: 50%;
	content: '';
	position: absolute;
	top: -50%;
	left: 0;
	height: 100px;
	width: 100px;
}

.heart::before {
	background: inherit;
	border-radius: 50%;
	content: '';
	position: absolute;
	top: 0;
	right: -50%;
	height: 100px;
	width: 100px;
}
`

export default function HeartPulse() {
  return (
    <>
      <HeartContainer><div className="heart"></div></HeartContainer>
    </>
  )
}