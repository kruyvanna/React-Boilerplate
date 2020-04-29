import React, { Component } from 'react'

class DeleteConfirmButton extends Component {
	constructor() {
		super()
		this.toggleShow = this.toggleShow.bind(this)
		this.handleConfirmClick = this.handleConfirmClick.bind(this)
		this.state = {
			isOpen: false
		}
	}

	toggleShow() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	handleConfirmClick() {
		this.setState({
			isOpen: false
		})
		this.props.onConfirm && this.props.onConfirm()
	}

	render() {
		const { isDeleting } = this.props
		const { isOpen } = this.state
		return (
			<div
				className={
					isOpen
						? 'dropdown delete-confirm-button is-active full-width'
						: 'dropdown delete-confirm-button full-width'
				}
			>
				<div className="dropdown-trigger full-width">
					<button
						onClick={this.toggleShow}
						className={
							isDeleting
								? 'button is-danger is-loading full-width'
								: 'button is-danger full-width'
						}
					>
						DELETE
					</button>
				</div>
				<div className="dropdown-menu">
					<div onClick={this.handleConfirmClick} className="button is-warning">
						CONFIRM DELETE
					</div>
				</div>
			</div>
		)
	}
}

export { DeleteConfirmButton }
export default DeleteConfirmButton
