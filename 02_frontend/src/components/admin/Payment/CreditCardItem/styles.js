import styled from 'styled-components'


export const Container = styled.div`
	display : flex;
	padding : 10px;
	width : 100%;
	justify-content: space-between;
	&:hover{
		cursor : pointer;
		background: ${props => props.theme.colors.creditColor};
	}
`
export const SubContainer = styled.div`
	display : flex;

` 
export const IconContainer = styled.div`

	width: 40px;
	height : 40px;
	border: 1px solid ${props => props.theme.colors.primary};
	display : flex;
	align-items: center;
    justify-content: center;
    border-radius : 5px;
	svg{
		font-size : 22px;
	}
`
export const TypeIconContainer = styled.div`
	display : flex;
	align-items: center;
    justify-content: center;
    width : 80px;
    height : 40px;
	border: 1px solid ${props => props.theme.colors.primary};
    margin-left : 5px;
    border-radius : 5px;

	svg{
		font-size : 40px;
	}
`
export const DetailInfo = styled.div`
 margin-left : 20px;
`
export const Letter = styled.p`
 font-size : 14px;
`