import React, { Component } from "react";
import PropTypes from "prop-types";
import Toolbar from '../atoms/Toolbar';
import styled from "styled-components";

const WrapperBody = styled.div``;

class BasicLayout extends Component {
	state = {	
		pageYOffset: 0
	};
	componentDidMount() {
		window.addEventListener("scroll", this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll, false);
	}

	onScroll = () => {
		this.setState(s => {
			return { ...s, pageYOffset: window.pageYOffset };
		});
	};

	render() {
		return (
			<div>
				<Toolbar
					title={this.props.title}
					onTapTitle={this.props.onTapTitle}
					withBack={this.props.withBack}
					userData={this.props.userData}
					withProfile
					// withShadow={this.state.pageYOffset > MAX_PAGE_TOP_TO_CHANGE_TOOLBAR}
					withCart={true}
				/>
				<WrapperBody>{this.props.children}</WrapperBody>
			
			</div>
		);
	}
}

BasicLayout.propTypes = {
	title: PropTypes.string.isRequired,
	pathname: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
	isMobile: PropTypes.bool,
	userData: PropTypes.object, // TODO: Add this important prop to another layouts
	withBack: PropTypes.bool,
	onLogout: PropTypes.func,
	onTapTitle: PropTypes.func
};

export default BasicLayout;
