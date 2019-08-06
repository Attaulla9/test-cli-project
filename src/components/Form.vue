<template>
  <form @submit.prevent="submitForm">
    <div class="Form">
      <!-- Question 1 - Program_Self Start -->
      <div class="card question1">
        <header class="card-header">
          <p
            class="card-header-title"
          >1. Is this consulation for yourself or for any of your family member?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('program_for_self')}"
                :message="errors.first('program_for_self')"
              >
                <b-radio
                  v-model="program_for_self"
                  name="program_for_self"
                  native-value="Self"
                  v-validate="'required'"
                >Myself</b-radio>
                <b-radio
                  v-model="program_for_self"
                  name="program_for_self"
                  native-value="Family Member"
                  v-validate="'required'"
                >Family Member</b-radio>
              </b-field>
            </div>

            <div class="block" v-if="program_for_self == 'Family Member'">
              <small class="has-text-grey">Please enter their details</small>
              <b-field :type="{'is-danger': errors.has('name')}" :message="errors.first('name')">
                <b-input placeholder="Name" v-model="name" name="name" v-validate="'required'" />
              </b-field>
              <b-field :type="{'is-danger': errors.has('phone')}" :message="errors.first('phone')">
                <b-input
                  placeholder="Phone"
                  v-model="phone"
                  name="phone"
                  type="tel"
                  maxlength="10"
                  v-validate="{ required: true, regex: /^[1-9][0-9]{9}$/ }"
                />
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- Question 1 - Program_for_Self End -->
      <!-- Question 2 - Disease - Start -->
      <div class="card question2">
        <header class="card-header">
          <p class="card-header-title">2. Do you suffer from any of these diseases?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('diseaseCheck')}"
                :message="errors.first('diseaseCheck')"
              >
                <b-radio
                  v-model="diseaseCheck"
                  name="diseaseCheck"
                  native-value="Yes"
                  v-validate="'required'"
                >Yes</b-radio>

                <b-radio
                  v-model="diseaseCheck"
                  name="diseaseCheck"
                  native-value="No"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>

            <div class="block" v-if="diseaseCheck == 'Yes'">
              <b-field
                :type="{'is-danger': errors.has('disease')}"
                :message="errors.first('disease')"
              >
                <b-select
                  v-validate="'required'"
                  name="disease"
                  v-model="disease"
                  expanded
                  placeholder="Select disease"
                >
                  <option
                    v-for="(disease, index) in diseases"
                    :value="disease"
                    :key="index"
                  >{{ disease }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <!-- Question 2 - Disease End -->
      <!-- Question 3 Medications Start -->
      <br />
      <div class="card question3">
        <header class="card-header">
          <p class="card-header-title">3. Do you take any medications?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('medicationsCheck')}"
                :message="errors.first('medicationsCheck')"
              >
                <b-radio
                  v-model="medicationsCheck"
                  name="medicationsCheck"
                  native-value="Yes"
                  v-validate="'required'"
                >Yes</b-radio>
                <b-radio
                  v-model="medicationsCheck"
                  name="medicationsCheck"
                  native-value="No"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>

            <div class="block" v-if="medicationsCheck == 'Yes'">
              <small class="has-text-grey">Enter medications (Comma separated)</small>
              <b-field
                :type="{'is-danger': errors.has('medications')}"
                :message="errors.first('medications')"
              >
                <b-input
                  placeholder="Medications"
                  v-model="medications"
                  name="medications"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <!-- Question 3 Medications End -->
      <!-- Question 4 Surgery Start -->
      <br />
      <div class="card question4">
        <header class="card-header">
          <p class="card-header-title">4. Have you undergone any surgery in last 1 year?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('surgeryCheck')}"
                :message="errors.first('surgeryCheck')"
              >
                <b-radio
                  v-model="surgeryCheck"
                  name="surgeryCheck"
                  native-value="true"
                  v-validate="'required'"
                >Yes</b-radio>
                <b-radio
                  v-model="surgeryCheck"
                  name="surgeryCheck"
                  native-value="false"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>

            <div class="block" v-if="surgeryCheck == 'true'">
              <small class="has-text-grey">Enter surgery name</small>
              <b-field
                :type="{'is-danger': errors.has('surgery')}"
                :message="errors.first('surgery')"
              >
                <b-input
                  placeholder="Surgery Name"
                  v-model="surgery"
                  name="surgery"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <!-- Question 4 Surgery Medications End -->
      <!-- Question 5 Tried Weight Loss -->
      <br />
      <div class="card question5">
        <header class="card-header">
          <p class="card-header-title">5. Have you tried any weight loss program in the past?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :type="{'is-danger': errors.has('triedWeightLoss')}"
                :message="errors.first('triedWeightLoss')"
              >
                <b-select
                  v-validate="'required'"
                  name="triedWeightLoss"
                  v-model="triedWeightLoss"
                  expanded
                  placeholder="Select a option"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="no,_but_have_tried_it_myself">No, I have tried myself</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <!-- Question 5 Tried Weight Loss End -->
      <br />
      <!-- Question 6 - Cooking Start -->
      <div class="card question6">
        <header class="card-header">
          <p class="card-header-title">6. Do you have cooking facility at your residence?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('cooking')}"
                :message="errors.first('cooking')"
              >
                <b-radio
                  v-model="cooking"
                  name="cooking"
                  native-value="yes"
                  v-validate="'required'"
                >Yes</b-radio>
                <b-radio
                  v-model="cooking"
                  name="cooking"
                  native-value="no"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- Question 6 - Cooking End -->
      <!-- Question 7 - Office Start -->
      <div class="card question7">
        <header class="card-header">
          <p class="card-header-title">7.Is this consultation at your home or office?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('officeCheck')}"
                :message="errors.first('officeCheck')"
              >
                <b-radio
                  v-model="officeCheck"
                  name="officeCheck"
                  native-value="Home"
                  v-validate="'required'"
                >Home</b-radio>
                <b-radio
                  v-model="officeCheck"
                  name="officeCheck"
                  native-value="Office"
                  v-validate="'required'"
                >Office</b-radio>
              </b-field>
            </div>
            <div class="block" v-if="officeCheck == 'Office'">
              <p class="has-text-grey">Do you have a separate cabin for this meeting?</p>
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('cabinCheck')}"
                :message="errors.first('cabinCheck')"
              >
                <b-radio
                  v-model="cabinCheck"
                  name="cabinCheck"
                  native-value="Yes"
                  v-validate="'required'"
                >Yes</b-radio>
                <b-radio
                  v-model="cabinCheck"
                  name="cabinCheck"
                  native-value="No"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- Question 7 - Office End -->
      <!-- Question 8 - 45 mins Start -->
      <div class="card question8">
        <header class="card-header">
          <p
            class="card-header-title"
          >8. This consultation will take 45 minutes. Are you ok to spend that time?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('consultationTimeCheck')}"
                :message="errors.first('consultationTimeCheck')"
              >
                <b-radio
                  v-model="consultationTimeCheck"
                  name="consultationTimeCheck"
                  native-value="Yes"
                  v-validate="'required'"
                >Yes</b-radio>
                <b-radio
                  v-model="consultationTimeCheck"
                  name="consultationTimeCheck"
                  native-value="No"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- Question 8 - 45 mins End -->
      <!-- Question 9 - directVsit mins Start -->
      <div class="card question9">
        <header class="card-header">
          <p
            class="card-header-title"
          >9. Is it ok if our consultant visits you directly instead of multiple calls?</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="block">
              <b-field
                :addons="false"
                :type="{'is-danger': errors.has('directVisit')}"
                :message="errors.first('directVisit')"
              >
                <b-radio
                  v-model="directVisit"
                  name="directVisit"
                  native-value="true"
                  v-validate="'required'"
                >Yes</b-radio>
                <b-radio
                  v-model="directVisit"
                  name="directVisit"
                  native-value="false"
                  v-validate="'required'"
                >No</b-radio>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- Question 9 - directVsit End -->
      <b-button
        :loading="loading"
        :disabled="disabled"
        type="is-danger"
        size="is-medium"
        native-type="submit"
        class="btn"
      >Submit</b-button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data() {
    return {
      disabled: false,
      lead_phone: null,
      program_for_self: null,
      diseaseCheck: null,
      medicationsCheck: null,
      surgeryCheck: null,
      officeCheck: null,
      consultationTimeCheck: null,
      directVisit: null,
      name: null,
      phone: null,
      medications: null,
      surgery: null,
      disease: null,
      triedWeightLoss: null,
      cooking: null,
      loading: false,
      cabinCheck: null,
      dataToSend: "",
      diseases: [
        "Type 2 Diabetes",
        "Type 1 Diabetes",
        "Knee Pain/Back Pain",
        "Migraines",
        "Knee Pain",
        "Back Pain",
        "PCOD",
        "Heart Disease",
        "High/Low blood pressure",
        "Thyroid",
        "Stroke",
        "Hernia",
        "Elevated cholesterol",
        "Sleep apnea",
        "Gallstones",
        "Food Allergy",
        "Acidity",
        "Ulcers",
        "Chronic constipation",
        "Asthma",
        "Arthritis",
        "Anemia",
        "Chronic Fatigue",
        "Varicose Vein",
        "Liver Disease",
        "Kidney Disease",
        "Muscle/joint",
        "Cancer",
        "Depression",
        "Diarrhea",
        "Dehydration",
        "Sinus",
        "Water Retention",
        "Spondylitis",
        "Osteoporosis",
        "Menopause",
        "Lactating",
        "Bone",
        "Hypertension",
        "Gout/ High uric acid levels",
        "Gestational Diabetes",
        "Pre Diabetes",
        "Pre Menopause",
        "Post Menopause"
      ]
    };
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;
          this.disabled = true;
          this.dataToSend =
            '[{"Attribute":"Phone","Value":"' +
            this.lead_phone +
            '"},{"Attribute":"mx_program_for_self_or_family_member","Value":"' +
            this.program_for_self +
            '"},{"Attribute":"mx_program_for_family_name","Value":"' +
            this.name +
            '"},{"Attribute":"mx_program_for_family_phone","Value":"' +
            this.phone +
            '"},{"Attribute":"mx_disease","Value":"' +
            this.diseaseProxy() +
            '"},{"Attribute":"mx_diseases","Value":"' +
            this.medicationsProxy() +
            '"},{"Attribute":"mx_surgery_in_last_year","Value":"' +
            this.surgeryCheck +
            '"},{"Attribute":"mx_surgery_name","Value":"' +
            this.surgery +
            '"},{"Attribute":"mx_Previous_weight_loss_program","Value":"' +
            this.triedWeightLoss +
            '"},{"Attribute":"mx_have_a_cook_at_home","Value":"' +
            this.cooking +
            '"},{"Attribute":"mx_consultation_at_home_or_office","Value":"' +
            this.officeCheck +
            '"},{"Attribute":"mx_cabin_available_for_consultation_at_office","Value":"' +
            this.cabinCheck +
            '"},{"Attribute":"mx_willing_to_spend","Value":"' +
            this.consultationTimeCheck +
            '"},{"Attribute":"mx_no_need_to_call","Value":"' +
            this.directVisit +
            '"}]';

          var self = this;
          // Make a request for a user with a given ID
          axios
            .post(
              "https://heroku.truweight.in/post_leads_to_ls",
              this.dataToSend
            )
            .then(() => {
              self.loading = false;
              self.$buefy.dialog.alert({
                title: "Thank you!",
                message:
                  "Please expect a call from our expert confirming your booking",
                type: "is-success"
              });
            })
            .catch(() => {
              self.loading = false;
              self.disabled = true;
              self.toast("Something went wrong, please try again", "is-danger");
            });
        } else {
          this.toast("Please fix the above errors", "is-danger");
        }
      });
    },
    diseaseProxy() {
      return this.diseaseCheck == "No" ? "None" : this.disease;
    },
    medicationsProxy() {
      return this.medicationsCheck == "No" ? "None" : this.medications;
    },
    toast(msg, type) {
      this.$buefy.toast.open({
        message: msg,
        type: type,
        position: "is-bottom",
        duration: 3000
      });
    }
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search.substring(1));
    this.lead_phone = urlParams.get("data_phone");
  }
};
</script>
<style scoped>
</style>
