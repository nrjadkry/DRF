
  const form=document.getElementById('reviewer-form');


  const company=document.getElementById('id_company');
  const is_anonymous=document.getElementById('id_is_anonymous');
  const is_current_Employee=document.getElementById('id_is_current_Employee');
  const job_duration=document.getElementById('id_job_duration');
  const emp_status=document.getElementById('id_emp_status');
  const department=document.getElementById('id_department');

  const Job_title=document.getElementById('id_Job_title');
  const Overall_experience=document.getElementById('id_Overall_experience');

  const Overall_rating=document.getElementById('id_Overall_rating');
  const Pros=document.getElementById('id_Pros');
  const cons=document.getElementById('id_cons');

  const salary=document.getElementById('id_salary');
  const salary_type=document.getElementById('id_salary_type');
  
  const overall_experience_rating=document.getElementById('id_overall_experience_rating');
  const interview_difficulty=document.getElementById('id_interview_difficulty');
  const interview_process_description=document.getElementById('id_interview_process_description');
  const suggestions_to_other_aspirants=document.getElementById('id_suggestions_to_other_aspirants');
  const feedback_to_organization=document.getElementById('id_feedback_to_organization');
  const would_you_recommend=document.getElementById('id_would_you_recommend');

  //add Event
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
  });

  const sendData = (sRate,count) =>{
    if (sRate===count) {
      alert('Congrats');
    }

  }

  const successMsg=()=>{
    let formCont = document.getElementsByClassName('form-field');
    // console.log(formCont[0].className)

    // console.log(formCont)

    var count=formCont.length-1; 

    for(var i=0; i<formCont.length; i++){
      if (formCont[i].className === 'form-field success') {
        var sRate = 0 + i;
        sendData(sRate, count);
        // console.log(sRate);
      }
      else{
        return false;
        console.log('error')
      }
    }
  }

  const validate=()=>{
    
      const companyVal=company.value.trim();
      const job_durationVal=job_duration.value.trim();
      const emp_statusVal=emp_status.value.trim();
      const departmentVal=department.value.trim();
      const Job_titleVal=Job_title.value.trim();
      const Overall_experienceVal=Overall_experience.value.trim();
      const Overall_ratingVal=Overall_rating.value.trim();
      const ProsVal=Pros.value.trim();
      const consVal=cons.value.trim();
      const salaryVal=salary.value.trim();
      const salary_typeVal=salary.value.trim();

      const overall_experience_ratingVal=overall_experience_rating.value.trim();
      const interview_difficultyVal=interview_difficulty.value.trim();
      const interview_process_descriptionVal=interview_process_description.value.trim();
      
      const suggestions_to_other_aspirantsVal=suggestions_to_other_aspirants.value.trim();
      const feedback_to_organizationVal=feedback_to_organization.value.trim();
      const would_you_recommendVal=would_you_recommend.value.trim();


   // Company Validation
      if (would_you_recommendVal ===""){
        setErrorMsg(would_you_recommend,'Select an option')
      }
      else{
        setSuccessmsg(would_you_recommend)
      }
      if (suggestions_to_other_aspirantsVal ===""){
        setErrorMsg(suggestions_to_other_aspirants,'Provide any suggestions to other aspirants')
      }
      else{
        setSuccessmsg(suggestions_to_other_aspirants)
      }

      if (feedback_to_organizationVal ===""){
        setErrorMsg(feedback_to_organization,'Provide a feedback to the company')
      }
      else{
        setSuccessmsg(feedback_to_organization)
      }
      

      if (overall_experience_ratingVal ===""){
        setErrorMsg(overall_experience_rating,'Provide your overall rating ')
      }
      else{
        setSuccessmsg(overall_experience_rating)
      }
      if (interview_difficultyVal ===""){
        setErrorMsg(interview_difficulty,'Select a difficulty level')
      }
      else{
        setSuccessmsg(interview_difficulty)
      }

      if (interview_process_descriptionVal ===""){
        setErrorMsg(interview_process_description,'Describe the process')
      }
      else{
        setSuccessmsg(interview_process_description)
      }


      if (companyVal ===""){
        setErrorMsg(company,'Select a company ')
      }
      else{
        setSuccessmsg(company)
      }

      // Job Duration Validation
      if (job_durationVal ===""){
        setErrorMsg(job_duration,'Select your job Duration')
      }
      else{
        setSuccessmsg(job_duration)
      }

      // Employment status validation
      if (emp_statusVal ===""){
        setErrorMsg(emp_status,'Select your employment status')
      }
      else{
        setSuccessmsg(emp_status)
      }

      // Department validation
      if (departmentVal ===""){
        setErrorMsg(department,'Enter your department')
      }
      else{
        setSuccessmsg(department)
      }
    
      // Job Title validation
      if (Job_titleVal ===""){
        setErrorMsg(Job_title,'Enter your job title')
      }
      else{
        setSuccessmsg(Job_title)
      }

      //Overall Experience validation
      if (Overall_experienceVal ===""){
        setErrorMsg(Overall_experience,'Provide your overall experienc')
      }
      else{
        setSuccessmsg(Overall_experience)
      }  

      // Overall rating validation
      if (Overall_ratingVal ===""){
        setErrorMsg(Overall_rating,'Provide your overall rating')
      }
      else{
        setSuccessmsg(Overall_rating)
      }
    
      // Pros validation
      if (ProsVal ===""){
        setErrorMsg(Pros,'Enter the pros of the company')
      }
      else{
        setSuccessmsg(Pros)
      }

      //cons validation
      if (consVal ===""){
        setErrorMsg(cons,'Enter the cons of the company')
      }
      else{
        setSuccessmsg(cons)
      }  

      //cons validation
      if (salaryVal ===""){
        setErrorMsg(salary,'Enter your salary')
      }
      else{
        setSuccessmsg(salary)
      }  

      //cons validation
      if (salary_typeVal ===""){
        setErrorMsg(salary_type,'Select the salary type')
      }
      else{
        setSuccessmsg(salary_type)
      }  

      successMsg();
  };

  function setErrorMsg(input,errormsg){
    const formControl = input.parentElement.parentElement;
    // console.log(formControl)
    const small = formControl.querySelector('small');
    formControl.className='form-field error'
    input.parentElement.className='form-control-search form-control-search--review error'
    small.innerText = errormsg
  }

  function setSuccessmsg(input){
    const formControl = input.parentElement.parentElement;
    // console.log(formControl)
    const small = formControl.querySelector('small');
    formControl.className='form-field success'

    small.innerText=''
    input.parentElement.className='form-control-search form-control-search--review success'
    
  }
