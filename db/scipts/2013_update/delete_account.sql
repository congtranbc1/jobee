
delete from User where UserID = @user_id;

-- delete exception
delete from repeat_exceptions 
where 
	repeat_id in (select r.id from repeats r join tasks t on (r.task_id = t.id)
		where t.user_id = @user_id
	);
-- delete repeat
delete from repeats 
where 
	task_id in (select t.id from tasks t
		where t.user_id = @user_id
	);
-- delete alerts
delete from alerts 
where 
	task_id in (select t.id from tasks t
		where t.user_id = @user_id
	);
-- delete tasks
delete from tasks 
where user_id = @user_id;
-- delete categories
delete from categories 
where user_id = @user_id;
-- delete sn setting
delete from SN_Setting 
where UserID = @user_id;
-- delete sw setting
delete from SW_Setting 
where UserID = @user_id;

-- delete WorkTable
delete from WorkTable 
where UserID = @user_id;

-- delete ProjectTable
delete from ProjectTable 
where UserID = @user_id;

-- delete ProjectTable
delete from ProjectTable 
where UserID = @user_id;