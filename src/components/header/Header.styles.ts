import { styled } from 'styled-components';
import { mainBackground } from '../../common/colors';

export const HeaderInfoSection = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${mainBackground};
    .home-header-short-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .short-info-item {
            font-family: 'Proxima Nova';
            padding: 0 40px;
            .logo {
                width: 100px;
            }
            .phone-section {
                font-size: 21px;
                font-weight: 400;
                line-height: 26px;
                color: #00273b;
                display: flex;
            }
        }
    }
    .empty {
        width: 100%;
    }
`;
