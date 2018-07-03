class Api::ProjectTablesController < Api::BaseController
	require 'digest/md5'
  respond_to :xml, :json
  
	#===========================================================================
	#create project - create list project
	def create
		ProjectTable.skip_callback(:validation, :after, :encode_data) #skip encode base64 for create new project
		req_projs = params[:projects]
		error_list = Array.new
		respond_proj = Array.new
		count = 0
		ProjectTable.transaction do
			req_projs.each do |projItem|
				proj = ProjectTable.new(projItem)
				proj.LastUpdate = Time.now.to_i #set last update when create project
				proj.WorkIDList = ""
				proj.UserID = current_user_id
				if proj.save
					respond_proj << proj
				else
					temp = { 'item' => count }
          errors_list << temp
				end
				break if count == 49
				count = count + 1
			end #end loop
		end #end transaction

		respond_to do |format|
			if error_list.empty?
				format.xml {render :xml => respond_proj.to_xml(:root => API_PROJECTS, :except => [:UserID])}
				format.json {render :json => respond_proj.to_json(:root => API_PROJECTS, :except => [:UserID])}
			else
				format.xml {render :xml => {:error => API_FAIL}.to_xml(:root => API_ERROR_ROOT)}
				format.json {render :json => {:error => API_FAIL}.to_json(:root => API_ERROR_ROOT)}
			end #end if
		end #end respond
		ProjectTable.set_callback(:validation, :after, :encode_data) #set encode base64 when create new project
	end
	
	#===========================================================================
	#update project
	def update
		proj = ProjectTable.find_by_ProjID(params[:id])
		respond_to do |format|
			if proj == nil
				format.xml {render :xml => {:error => API_NOT_EXIST}.to_xml(:root => API_ERROR_ROOT)}
				format.json {render :json => {:error => API_NOT_EXIST}.to_json(:root => API_ERROR_ROOT)}
			else
				
			end
		end
	end
	
	#===========================================================================
	#update list project
	def update_list
		
	end
	
	#===========================================================================
	#delete a project
	#Note: check user id
	def destroy
		ProjectTable.skip_callback(:find, :after, :after_find) #skip encode base64 for create new project
		projID = params[:id]
		proj = ProjectTable.find_by_ProjID(projID)
		work = WorkTable.where(" UserID = ? AND ProjID = ?", current_user_id, projID)
		respond_to do |format|
			#format.xml {render :xml => work.to_xml(:root => work.length)}
			if proj == nil
				format.xml {render :xml => {:error => API_NOT_EXIST}.to_xml(:root => API_ERROR_ROOT)}
				format.json {render :json => {:error => API_NOT_EXIST}.to_json(:root => API_ERROR_ROOT)}
			elsif work.length > 0 #check child of project
				format.xml {render :xml => {:error => API_HAS_CHILD}.to_xml(:root => API_ERROR_ROOT)}
				format.json {render :json => {:error => API_HAS_CHILD}.to_json(:root => API_ERROR_ROOT)}
			else # delete project if has not child
				#proj = ProjectTable.where(" UserID = ? AND ProjID = ?", current_user_id, projID)
				proj.destroy
				format.xml {render :xml => {:id => proj.ProjID}.to_xml(:root => API_DELETED_ROOT)}
				format.json {render :json => {:id => proj.ProjID}.to_json(:root => API_DELETED_ROOT)}
			end
		end #end respond
		ProjectTable.set_callback(:find, :after, :after_find) #set encode base64 when create new project
	end
	
	#===========================================================================
	#delete list project
	
	#===========================================================================
	#get project
	def show
		ProjectTable.skip_callback(:find, :after, :after_find) #skip encode base64 for create new project
		projID = params[:id]
		proj = ProjectTable.find_by_ProjID(projID)
		respond_to do |format|
			if proj == nil
				format.xml {render :xml => {:error => API_NOT_EXIST}.to_xml(:root => API_ERROR_ROOT)}
				format.json {render :json => {:error => API_NOT_EXIST}.to_json(:root => API_ERROR_ROOT)}
			else
				format.xml {render :xml => proj.to_xml(:except => [:UserID],:root => API_PROJECT)}
				format.json {render :json => proj.to_json(:except => [:UserID],:root => API_PROJECT)}
			end
		end
		ProjectTable.set_callback(:find, :after, :after_find) #set encode base64 when create new project
	end
	
	#===========================================================================
	#get list project
	def index
		ProjectTable.skip_callback(:find, :after, :after_find) #skip encode base64 for create new project
		projs = ProjectTable.where(API_USER_ID, current_user_id)
		respond_to do |format|
			format.xml {render :xml => projs.to_xml(:except => [:UserID, :WorkIDList], :root => API_PROJECTS)}
			format.json {render :json => projs.to_json(:except => [:UserID, :WorkIDList], :root => API_PROJECTS)}
		end
		ProjectTable.set_callback(:find, :after, :after_find) #set encode base64 when create new project
	end

end #end class