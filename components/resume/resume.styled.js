import styled from 'styled-components'

export const StyledResumeContainer = styled.div`
	background: ${({ theme }) => theme.gradient};
	padding: 3px;
	width: 100%;
	box-sizing: border-box;
`

export const StyledResume = styled.nav`
	background: ${({ theme }) => theme.backgroundColor};
`

export const StyledSection = styled.section`
	padding: 16px;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.fontColor};
`

export const StyledSkillsContainer = styled.div`
	border: 0.5px solid ${({ theme }) => theme.fontColor};
`

export const StyledSkillsRow = styled.div`
	display: flex;
`

export const StyledSkillsCell = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	border: 0.5px solid ${({ theme }) => theme.fontColor};
	font-size: var(--font-size-sm);
	padding: 8px 0;
`

export const StyledJobContainer = styled.div`
	padding-bottom: 1.5em;
	border-bottom: 1px solid ${({ theme }) => theme.fontColor};
	margin-bottom: 2em;

	&:last-child {
		padding-bottom: 0;
		border-bottom: none;
		margin-bottom: 0;
	}
`

export const StyledHeading = styled.h3`
	margin: 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;  
	overflow: hidden;
`

export const StyledJobDetail = styled.li`
	margin: 20px 0;
`

export const StyledEducationItem = styled.div`
	margin: 0 0 32px 0;
`
