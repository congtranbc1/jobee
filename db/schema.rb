# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120109045142) do

  create_table "Alert", :primary_key => "AlertID", :force => true do |t|
    t.integer "WorkID",                                  :null => false
    t.integer "Duration"
    t.string  "AlertType",  :limit => 1
    t.string  "TimeUnit",   :limit => 20
    t.integer "LastUpdate"
    t.integer "CreateTime"
    t.integer "AppID",                    :default => 1, :null => false
  end

  create_table "AppRegister", :primary_key => "ID", :force => true do |t|
    t.string  "AppRegisterID"
    t.integer "AppID"
    t.string  "AppName"
    t.integer "Private",       :limit => 1, :default => 0, :null => false
  end

  create_table "AppToken", :primary_key => "ID", :force => true do |t|
    t.string  "AppRegisterID"
    t.integer "UserID",        :limit => 8
    t.string  "KeyAPI"
    t.integer "TimeExpire"
    t.integer "CreateTime"
  end

  create_table "Contact", :primary_key => "ContactID", :force => true do |t|
    t.integer "UserID"
    t.text    "FirstName"
    t.text    "LastName"
    t.string  "Email"
    t.text    "Address"
    t.string  "Mobile"
    t.string  "Website"
    t.string  "Company"
    t.text    "Meta"
    t.integer "LastUpdate"
    t.integer "CreateTime"
    t.integer "AppID",      :default => 1, :null => false
  end

  create_table "ContactTable", :primary_key => "ContactID", :force => true do |t|
    t.text    "ContactData",              :null => false
    t.integer "LastUpdate",  :limit => 8
    t.integer "UserID",                   :null => false
    t.string  "ContactType"
  end

  add_index "ContactTable", ["UserID"], :name => "UserID"

  create_table "Context", :primary_key => "ContextID", :force => true do |t|
    t.integer "UserID"
    t.string  "ContextName"
    t.integer "LastUpdate"
    t.integer "CreateTime"
    t.integer "AppID",       :default => 1, :null => false
  end

  create_table "FileControl", :id => false, :force => true do |t|
    t.string  "UserName",                  :null => false
    t.integer "FileID",                    :null => false
    t.text    "FilePath",                  :null => false
    t.string  "FileState",    :limit => 5, :null => false
    t.text    "RootFileName",              :null => false
  end

  create_table "HyperLink", :primary_key => "HyperLinkID", :force => true do |t|
    t.integer "LinkID"
    t.integer "WorkID",                                    :null => false
    t.integer "UserID",                                    :null => false
    t.integer "StartPosition"
    t.integer "EndPosition"
    t.text    "KeyWord"
    t.integer "CreateTime",    :limit => 8
    t.integer "LastUpdate",    :limit => 8
    t.integer "AppID",                      :default => 1, :null => false
  end

  create_table "ProjectTable", :primary_key => "ProjID", :force => true do |t|
    t.text    "ProjName",                     :null => false
    t.string  "ProjColor"
    t.text    "WorkIDList"
    t.integer "LastUpdate",                   :null => false
    t.integer "UserID",                       :null => false
    t.integer "ProjType",      :default => 0
    t.integer "AppID",         :default => 1, :null => false
    t.text    "Tags"
    t.text    "Meta"
    t.string  "AppRegisterID"
  end

  add_index "ProjectTable", ["UserID"], :name => "UserID"

  create_table "Reminder", :primary_key => "ReminderID", :force => true do |t|
    t.string   "Title",      :limit => 2000
    t.integer  "EndTime",                                      :null => false
    t.boolean  "Alert",                      :default => true, :null => false
    t.integer  "UserID",                                       :null => false
    t.integer  "WorkID",                                       :null => false
    t.boolean  "Done",                                         :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "LastUpdate",                                   :null => false
  end

  create_table "SN_Note", :primary_key => "NoteID", :force => true do |t|
    t.integer "WorkID",    :null => false
    t.integer "ContactID", :null => false
    t.text    "TagIDList"
    t.text    "Children"
    t.integer "UserID",    :null => false
  end

  create_table "SN_Photo", :primary_key => "PhotoID", :force => true do |t|
    t.integer "WorkID",                  :null => false
    t.text    "FileName"
    t.integer "LastUpdate", :limit => 8, :null => false
    t.integer "UserID",                  :null => false
  end

  create_table "SN_Setting", :primary_key => "SnSetID", :force => true do |t|
    t.integer "UserID",         :null => false
    t.integer "ProjectID"
    t.integer "Skins"
    t.integer "ConfirmDel"
    t.integer "ConfirmMake",    :null => false
    t.integer "ConfirmDropIn",  :null => false
    t.integer "ConfirmDragOut", :null => false
    t.integer "DueDefault"
  end

  create_table "SN_Tag", :primary_key => "TagID", :force => true do |t|
    t.string  "TagName",                 :null => false
    t.string  "WorkIDList"
    t.integer "LastUpdate", :limit => 8
    t.integer "UserID",                  :null => false
  end

  create_table "SN_Voice", :primary_key => "VoiceID", :force => true do |t|
    t.integer "WorkID",                  :null => false
    t.string  "FileName"
    t.integer "LastUpdate", :limit => 8
    t.integer "UserID",                  :null => false
  end

  create_table "ST_Project", :primary_key => "Pro_ID", :force => true do |t|
    t.string  "UserID",     :limit => 100, :null => false
    t.string  "Pro_Name",                  :null => false
    t.string  "Pro_Resvr1",                :null => false
    t.string  "Pro_Resvr2",                :null => false
    t.integer "Pro_Resvr3",                :null => false
    t.integer "Pro_Resvr4",                :null => false
    t.binary  "Pro_Resvr5"
  end

  create_table "ST_Setting", :primary_key => "Set_ID", :force => true do |t|
    t.string  "UserID",               :limit => 100, :null => false
    t.integer "Set_CleanOldDayCount",                :null => false
    t.integer "Set_PushTaskFoward",                  :null => false
    t.string  "Set_Resvr1",                          :null => false
    t.string  "Set_Resvr2"
    t.string  "Set_Resvr3"
    t.integer "Set_Resvr4"
    t.integer "Set_Resvr5"
    t.integer "Set_Resvr6"
    t.integer "Set_Resvr7",                          :null => false
    t.binary  "Set_Resvr8"
    t.binary  "Set_Resvr9"
    t.string  "Set_Resvr10"
    t.integer "Set_DueWhenMove",                     :null => false
    t.integer "Set_MovingStyle",                     :null => false
    t.integer "Set_DeskTimeWEEnd",                   :null => false
    t.integer "Set_DeskTimeWEStart",                 :null => false
    t.integer "Set_EndDueCount",                     :null => false
    t.integer "Set_EndRepeatCount",                  :null => false
    t.integer "Set_ProjectDefID",                    :null => false
    t.integer "Set_RepeatDefID",                     :null => false
    t.integer "Set_ContextDefID",                    :null => false
    t.integer "Set_HowLongDefVal",                   :null => false
    t.integer "Set_HomeTimeWEEnd",                   :null => false
    t.integer "Set_HomeTimeWEStart",                 :null => false
    t.integer "Set_HomeTimeNDEnd",                   :null => false
    t.integer "Set_HomeTimeNDStart",                 :null => false
    t.integer "Set_DeskTimeEnd",                     :null => false
    t.integer "Set_DeskTimeStart",                   :null => false
    t.string  "Set_AlarmSoundName",                  :null => false
    t.integer "Set_iVoStyleID",                      :null => false
  end

  create_table "ST_Task", :primary_key => "Task_ID", :force => true do |t|
    t.integer "Pro_ID",              :null => false
    t.integer "IDKey",               :null => false
    t.string  "Set_Resvr1"
    t.string  "Set_Resvr2"
    t.string  "Set_Resvr3"
    t.string  "Set_Resvr4"
    t.string  "Set_Resvr5"
    t.integer "Set_Resvr6",          :null => false
    t.integer "Set_Resvr7",          :null => false
    t.integer "Set_Resvr8",          :null => false
    t.integer "Set_Resvr9",          :null => false
    t.integer "Set_Resvr10",         :null => false
    t.binary  "Set_Resvr11"
    t.binary  "Set_Resvr12"
    t.integer "Task_IsUseDeadLine",  :null => false
    t.integer "Task_NotEarlierThan", :null => false
    t.integer "Task_DeadLine",       :null => false
    t.integer "Task_OriginalWhere",  :null => false
    t.integer "Task_AlertID",        :null => false
    t.string  "Task_Contact"
    t.string  "Task_Location"
    t.integer "Task_RepeatTimes",    :null => false
    t.integer "Task_RepeatID",       :null => false
    t.integer "Task_StartTime",      :null => false
    t.integer "Task_Priority",       :null => false
    t.integer "Task_Pinned",         :null => false
    t.string  "Task_Name"
    t.string  "Task_Description"
    t.integer "Task_Status",         :null => false
    t.integer "Task_Completed",      :null => false
    t.integer "Task_TypeID",         :null => false
    t.integer "Task_What",           :null => false
    t.integer "Task_Who",            :null => false
    t.integer "Task_When",           :null => false
    t.integer "Task_Where",          :null => false
    t.integer "Task_HowLong",        :null => false
    t.integer "Task_Project",        :null => false
    t.integer "Task_EndTime",        :null => false
    t.integer "Task_Default",        :null => false
    t.integer "Task_TypeUpdate",     :null => false
    t.integer "Task_DateUpdate",     :null => false
    t.integer "Task_DueEndDate",     :null => false
  end

  create_table "SW_Setting", :primary_key => "SwSetID", :force => true do |t|
    t.integer "UserID"
    t.integer "Layout"
    t.integer "Theme",            :default => 1,                            :null => false
    t.text    "FontType"
    t.integer "FontSize"
    t.integer "Alert",            :default => 0,                            :null => false
    t.integer "SnoozeDuration",   :default => 5,                            :null => false
    t.integer "ConfirmDelete",    :default => 0
    t.string  "WeekStart"
    t.integer "WorkingHourStart", :default => 480
    t.integer "DefaultProjID"
    t.integer "ShowTask",         :default => 0
    t.integer "MoveTaskInCal"
    t.integer "NewTaskPlace"
    t.integer "LastUpdate"
    t.integer "CreateTime"
    t.integer "DefaultEveDur",    :default => 60
    t.string  "TimeZone",         :default => "Central Time (US & Canada)"
    t.string  "Email"
    t.integer "ConfirmMove",      :default => 0
    t.integer "WorkingHourEnd",   :default => 1080,                         :null => false
    t.integer "DefaultTaskDur",   :default => 30,                           :null => false
    t.string  "AppRegisterID"
  end

  create_table "SmartApp", :primary_key => "AppKey", :force => true do |t|
    t.string "AppName", :limit => 50, :null => false
  end

  create_table "TimeControl", :id => false, :force => true do |t|
    t.text   "UserName"
    t.string "TockenID"
    t.string "TimeOut"
  end

  create_table "User", :primary_key => "UserID", :force => true do |t|
    t.text    "UserPass",                                                 :null => false
    t.integer "GroupID"
    t.text    "UserName",                                                 :null => false
    t.string  "LastName",       :default => " "
    t.string  "FirstName",      :default => " "
    t.integer "Status",         :default => 0
    t.integer "Allow",          :default => 0
    t.date    "DateRegister"
    t.date    "DateExpire"
    t.integer "LevelUse",       :default => 0
    t.integer "ServiceType",    :default => 0
    t.string  "ActivationCode"
    t.string  "TimeZone",       :default => "Central Time (US & Canada)"
    t.text    "KeyAPI"
    t.boolean "Activated",      :default => false
  end

  create_table "WorkException", :primary_key => "ExceptionID", :force => true do |t|
    t.integer  "WorkID",                       :null => false
    t.datetime "ExceptionDate",                :null => false
    t.integer  "UserID",        :default => 0
    t.integer  "CreateTime"
    t.integer  "LastUpdate"
    t.integer  "AppID",         :default => 1, :null => false
  end

  create_table "WorkTable", :primary_key => "WorkID", :force => true do |t|
    t.integer "UserID",                                             :null => false
    t.integer "AppID",                                              :null => false
    t.integer "CreateTime",     :limit => 8
    t.text    "Title"
    t.integer "LastUpdate",     :limit => 8
    t.integer "WorkType"
    t.string  "WorkGroup"
    t.integer "StartTime",      :limit => 8
    t.integer "EndTime",        :limit => 8
    t.integer "Duration"
    t.string  "Context"
    t.text    "Location"
    t.integer "WorkStatus"
    t.integer "ProjID"
    t.boolean "Due",                         :default => false
    t.string  "RepeatType",     :limit => 2, :default => "N"
    t.integer "RepeatInterval",              :default => 0
    t.string  "RepeatFlag",     :limit => 7, :default => "0000000"
    t.boolean "Star",                        :default => false
    t.integer "RepeatEnd"
    t.boolean "GTDTask",                     :default => false
    t.integer "TaskOrder",                   :default => 0
    t.text    "Content"
    t.text    "Meta"
    t.integer "ContactID"
    t.integer "ContextID"
    t.text    "Tags"
    t.boolean "ADE",                         :default => false
    t.string  "URL"
    t.integer "CompletedDate",               :default => 0
    t.string  "AppRegisterID"
  end

  add_index "WorkTable", ["UserID"], :name => "UserID"

  create_table "WorkTag", :primary_key => "WorkTagID", :force => true do |t|
    t.integer "WorkID"
    t.integer "TagID"
    t.integer "UserID"
    t.integer "CreateTime"
    t.integer "LastUpdate"
  end

  create_table "alerts", :force => true do |t|
    t.integer  "task_id"
    t.integer  "minutes",                 :default => 0
    t.string   "alert_type", :limit => 1, :default => "N"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories", :force => true do |t|
    t.integer "user_id",                                         :null => false
    t.integer "app_id",                       :default => 2,     :null => false
    t.text    "name",                                            :null => false
    t.string  "color"
    t.integer "category_type",                :default => 0
    t.string  "tags",          :limit => 500
    t.string  "meta"
    t.integer "create_time"
    t.integer "last_update"
    t.boolean "invisible",                    :default => false
  end

  add_index "categories", ["user_id"], :name => "user_id"

  create_table "hyperlinks", :force => true do |t|
    t.integer  "root_id"
    t.integer  "target_id"
    t.integer  "user_id"
    t.integer  "start_position", :default => 0
    t.integer  "end_position",   :default => 0
    t.string   "keywork"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "repeat_exceptions", :force => true do |t|
    t.integer  "repeat_id"
    t.integer  "exception_date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "repeats", :force => true do |t|
    t.integer  "task_id"
    t.string   "repeat_type",     :limit => 1
    t.string   "repeat_flag",     :limit => 7, :default => "000000"
    t.integer  "repeat_interval",              :default => 1
    t.integer  "repeat_end"
    t.boolean  "repeat_by_due",                :default => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tag", :force => true do |t|
    t.integer "user_id"
    t.string  "name"
    t.integer "create_time"
    t.integer "last_update"
    t.integer "app_id",      :default => 2, :null => false
  end

  create_table "tasks", :force => true do |t|
    t.integer "user_id",                                          :null => false
    t.integer "category_id"
    t.integer "contact_id"
    t.integer "app_id",                                           :null => false
    t.integer "group_id",       :limit => 8,   :default => 0
    t.string  "title",          :limit => 500
    t.text    "content"
    t.string  "url"
    t.string  "location"
    t.string  "tags",           :limit => 500
    t.integer "task_type"
    t.integer "start_time"
    t.integer "end_time"
    t.boolean "due",                           :default => false
    t.integer "duration"
    t.boolean "completed",                     :default => false
    t.integer "completed_date",                :default => 0
    t.boolean "star",                          :default => false
    t.integer "order_number",                  :default => 0
    t.boolean "ade",                           :default => false
    t.string  "meta"
    t.integer "create_time"
    t.integer "last_update"
  end

  add_index "tasks", ["app_id"], :name => "app_id"
  add_index "tasks", ["category_id"], :name => "category_id"
  add_index "tasks", ["contact_id"], :name => "contact_id"
  add_index "tasks", ["task_type"], :name => "tasks_type"
  add_index "tasks", ["user_id"], :name => "user_id"

  create_table "user_onlines", :force => true do |t|
    t.integer "user_id",                    :null => false
    t.date    "login_date"
    t.integer "login_count", :default => 0, :null => false
  end

  create_table "working_time", :force => true do |t|
    t.integer "day"
    t.integer "start"
    t.integer "end"
    t.integer "user_id"
    t.integer "sw_set_id"
  end

end
