<template>
  <div id="user" >
      <div class="container ">   
            <div class="card mt-5 mb-5">
            <div class="card-header"> รายละเอียดผู้ยื่นคำร้อง </div>
             <div class="card-body " >
               <div class="p-5" >
                    <form  @submit.prevent="sendEmail">
                          <!-- ข้อมูลส่วนตัว -->
                          <table class="table table-sm table-bordered" >
                            <tbody >
                              <tr>
                                <td class="inline-rigth"><p>วันที่ยื่นคำร้อง :</p></td>
                                <td class="inline-left"><p>{{info.create_date}}</p></td>
                              </tr>
                              <tr>
                                <td class="inline-rigth"><p>ชื่อ-นามสกุล :</p></td>
                                <td class="inline-left"><p>{{info.name}} {{info.lastname}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เลขบัตรประชาชน :</p></td>
                                <td class="inline-left"><p>{{info.num_id}}</p></td>
                              </tr>
                        
                              <tr>
                                <td  class="inline-rigth"><p>เบอร์มือถือ :</p></td>
                                <td class="inline-left"><p>{{info.num_phone}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เบอร์โทรศัพท์บ้าน :</p></td>
                                <td class="inline-left"><p>{{info.num_phone_home}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>แฟกร์ :</p></td>
                                <td class="inline-left"><p>{{info.fax}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>อีเมล์ :</p></td>
                                <td class="inline-left"><p>{{info.email}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เคยมีประสบการณ์หรือไม่ :</p></td>
                                <td class="inline-left"><p>{{info.experience}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>รายละเอียด :</p></td>
                                <td class="inline-left"><p>- {{info.experience_detail}}</p></td>
                              </tr>
                              
                               <!-- สถานที่ตั้งร้าน -->
                             <tr>
                                <td  class="inline-rigth pt-3"><p>สถานที่ตั้งร้าน :</p></td>
                                <td class="inline-left pt-3"><p>{{info.home_number}}/{{info.home_group}}</p>  
                                    <p :hidden="info.home_road == '-'">{{info.home_build}} {{info.home_floor}} {{info.home_road}}</p>
                                    <p>{{info.sup_district}}</p>
                                    <p>{{info.district}}</p>
                                    <p>{{info.province}} {{info.zipecode}}</p>
                                </td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ชื่อสถานที่ :</p></td>
                                <td class="inline-left"><p>{{info.n_place}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ละติจูด :</p></td>
                                <td class="inline-left"><p>{{info.latitude}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ลองจิจูด :</p></td>
                                <td class="inline-left"><p>{{info.longitude}}</p></td>
                              </tr>

                              <!-- ความเป็นเจ้าของพื้นที่ -->
                              <tr>
                                <td class="inline-rigth"><p>ความเป็นเจ้าของพื้นที่ :</p></td>
                                <td class="inline-left"><p>{{info.landlord}}</p></td>
                              </tr>
                              <tr>
                                <td class="inline-rigth"><p>พื้นที่ตารางเมตร :</p></td>
                                <td class="inline-left"><p>{{info.meter_area}} ตรม.</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ความต้องการตกแต่งร้าน :</p></td>
                                <td class="inline-left"><p>{{info.store_decorate}}</p></td>
                              </tr>
                              <tr :hidden="info.store_descrip === ''">
                                <td  class="inline-rigth"><p>อื่นๆ :</p></td>
                                <td class="inline-left"><p>{{info.store_descrip}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>สภาพแวดล้อมโดยรวม:</p></td>
                                <td class="inline-left"><p>{{info.environment}}</p></td>
                              </tr>
                              <tr :hidden="info.environment_descrip === ''">
                                <td  class="inline-rigth"><p>อื่นๆ :</p></td>
                                <td class="inline-left"><p>{{info.environment_descrip}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>ที่จอดรถ :</p></td>
                                <td class="inline-left"><p>{{info.parking}}</p></td>
                              </tr>
                              <tr>
                                <td  class="inline-rigth"><p>เหตุผลในการสมัครทำธุรกิจ :</p></td>
                                <td class="inline-left"><p>{{info.raeson_detail}}</p></td>
                              </tr>
                    
                               <tr>
                                <td  class="inline-rigth"><p>สถานที่โดยรอบ :</p></td>
                                <td class="inline-left">
                                  <p :hidden="JSON.parse(info.local_mall).mall == '' ">
                                      {{JSON.parse(info.local_mall).mall}} - {{JSON.parse(info.local_mall).mall_detail}}</p>
                                  <p :hidden="JSON.parse(info.local_tea).tea == ''">
                                      {{JSON.parse(info.local_tea).tea}} - {{JSON.parse(info.local_tea).tea_detail}} </p>
                                  <p :hidden="JSON.parse(info.local_office).office == ''">
                                      {{JSON.parse(info.local_office).office}} - {{JSON.parse(info.local_office).office_detail}}</p>
                                  <p :hidden="JSON.parse(info.local_accom).accom == ''">
                                      {{JSON.parse(info.local_accom).accom}} - {{JSON.parse(info.local_accom).accom_detail}}</p>
                                  <p :hidden="JSON.parse(info.local_study).study == ''">
                                      {{JSON.parse(info.local_study).study}} - {{JSON.parse(info.local_study).study_detail}} </p>
                                  <p :hidden="JSON.parse(info.local_gas).gas == ''">
                                      {{JSON.parse(info.local_gas).gas}} - {{JSON.parse(info.local_gas).gas_detail}} </p>
                                  <p :hidden="JSON.parse(info.local_community).community == ''">
                                      {{JSON.parse(info.local_community).community}} - {{JSON.parse(info.local_community).community_detail}} </p>
                                  <p :hidden="JSON.parse(info.local_other).other == ''">
                                      {{JSON.parse(info.local_other).other}} - {{JSON.parse(info.local_other).other_detail}} </p>
                                </td>
                              </tr>

                              <tr>
                                <td  class="inline-rigth"><p>ภาพบัตรประชาชน :</p></td>
                                <td class="inline-left"><img :src="info.img_card"></td>
                              </tr>
                    
                             
                            </tbody>
                        </table> 

                        <div hidden>
                            <input type="text"  v-model="info.name" name="name">
                            <input type="text"  v-model="info.lastname" name="lastname">
                            <input type="email"  v-model="info.email" name="email">
                        </div>
    
                        <button  @click="handleReject(info.num_id)" class="btn btn-outline-danger mr-5 mt-5">Reject <i class="fa fa-ban"></i></button>
                        <button type="submit" @click="handleApprove(info.num_id)" class="btn btn-outline-success mt-5">Appove <i class="fa fa-check"></i></button> <br>
                        <router-link  to="/Admin" class="btn btn-primary mt-4"><i class="far fa-arrow-alt-circle-left"></i> Back </router-link>
                    </form>
                </div>
                  
            </div>
        </div>
           
      </div>
  </div>
</template>

<script>

import axios from 'axios';
import emailjs from 'emailjs-com';

export default { 
    name:"user",
    
    data() {
        return {
            info:null,
        }
    },
    mounted() {
        let numID = JSON.parse(localStorage.getItem("userid"))
         this.data_id = numID
        
        axios.get('http://localhost:3001/person-info/id',{params:{id:this.data_id}}).then((response) => {
        this.info = response.data.data[0]
    })
    
    },
    created() {
      this.checkPathuser()
  },
    methods: {
        checkPathuser() {
            var email = localStorage.getItem("email");
            if(!email){
                window.location = "LoginAdmin"
            }else{
                this.name = email
            }
        },
        sendEmail(e) { 
             try {
                if(this.info.status == 'รออนุมัติ') { //ส่งเมล
                    emailjs.sendForm('service_x4kt4v3', 'template_15mziaa', e.target,
                    'U7on2VpPLLp8-sBt9', {
                    name: this.info.name,
                    lastname: this.info.lastname,
                    email: this.info.email,
                })
              }

            }
            catch(error) {
                console.log("err",{error})
            } 
        },
        handleApprove(id){
            let data = {
                id:id
            }
            if (confirm("ต้องการอนุมัติรายชื่อนี้ใช่หรือไม่ ?")) {
            this.txt = "You pressed OK!";
            axios.put('http://localhost:3001/admin/approve/status', data).then((response) => {
                console.log(response)
            })
            } else {
            this.txt = "You pressed Cancel!";
          }
            window.location = "/Admin"
        },
        handleReject(id){
            let data = {
                id:id
            }
             if (confirm("ไม่อนุมัติรายชื่อนี้ใช่หรือไม่ ?")) {
            this.txt = "You pressed OK!";
            axios.put('http://localhost:3001/admin/noneapprove/status', data).then((response) => {
                // console.log(response)
                if(response) {  
                    console.log(response)
                }
            })
        } else {
            this.txt = "You pressed Cancel!";
        }
            window.location = "/Admin"
        },
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
div {
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    font-family: 'Roboto Mono', monospace;
}
p{
  /* text-align: right ; */
  font-size: 13.5px;
  margin: 0 auto; 
   /* padding-left:40% ; */
}
.inline-rigth{
  text-align: right;
  padding-right: 20px;
  font-weight: bold;
}
.inline-left{
  text-align: left;
  padding-left: 20px;
}
img{
  width: auto;
  height: 200px;
}
</style>