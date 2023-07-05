import styled, {keyframes} from 'styled-components'
import { mainBackground } from '../../common/colors'

const moveToLeft = keyframes`
  0% {
    transform: translateX(120px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }`

const moveToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(120px);
    opacity: 0;
  }
`

export const SidebarContainer = styled('div')`
  display: flex;
  width: 80px;
  height: 100vh;
  background: ${mainBackground};
  position: fixed;
  right: 0;
  top: 0;
  margin-left: auto;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 20;
  opacity: 0;
  &.visible {
    opacity: 1;
    animation-duration: 1s;
    animation-name: ${moveToLeft};
  }
  &.hide {
    animation-duration: 1s;
    animation-name: ${moveToRight};
  }
  @media(max-width: 800px) {
    display: none;
  }

.sidebar-content {
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .make-order-link {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #24211f;
    cursor: pointer;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    white-space: nowrap;
    &:hover {
      color: #69ac38;
    }
  }
}

.socials {
  display: flex;
  flex-direction: column;
}
`