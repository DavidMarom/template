import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadTasks } from "../store/actions/taskActions";
import { TaskStrip } from '../cmps/TaskStrip';

const _Tasks = () => {
	const dispatch = useDispatch()
	const [refresh, setRefresh] = useState(0)

	const tasks = useSelector((state) => state.task.tasks);

	// const [currPage, setCurrPage] = useState(1);
	// const [search, setSearch] = useState('');

	// let totalPages = Math.ceil(bookCount / 4)

	const doRefresh = () => {
		setRefresh(refresh+1)
		dispatch(loadTasks());
	}

	useEffect(() => {
		dispatch(loadTasks());
	}, [refresh]);
	
	// On mount
	useEffect(() => {
		dispatch(loadTasks());
		dispatch(setPageName('tasks'));
		console.log(tasks);
	}, []);

	return (
		(tasks ?
			<div>
				<h1>Tasks</h1>
				<div className="page-details">
					
				</div>

				<div className="table-head">
					<p className="tc">Task</p>
					<p className="tc">Status</p>
					<p className="tc"></p>
				</div>

				{tasks.map(task => <TaskStrip key={task._id} task={task} doRefresh={doRefresh} />)}
			</div>
			:
			<h1>Loading</h1>
		)
	)
}
export const Tasks = _Tasks
