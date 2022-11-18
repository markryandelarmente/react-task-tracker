import { useState } from "react"

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState("")
	const [day, setDay] = useState("")
	const [reminder, setReminder] = useState(false)

	const onSubmit = e => {
		e.preventDefault()

		if (!text) {
			alert("Please add a task")
			return
		}

		onAdd({ text, day, reminder })
		clearForm()
	}

	const clearForm = () => {
		setText("")
		setDay("")
		setReminder(false)
	}

	return (
		<form onSubmit={onSubmit} className="add-form">
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input
					type="text"
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder="Add Task"
				/>
			</div>
			<div className="form-control">
				<label htmlFor="">Day & Time</label>
				<input
					type="text"
					value={day}
					onChange={e => setDay(e.target.value)}
					placeholder="Add Day & Time"
				/>
			</div>
			<div className="form-control form-control-check">
				<label htmlFor="">Reminder</label>
				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={e => setReminder(e.currentTarget.checked)}
					className="checkbox"
					placeholder="Add Reminder"
				/>
			</div>
			<input type="submit" className="btn btn-block" value="Save Task" />
		</form>
	)
}

export default AddTask
