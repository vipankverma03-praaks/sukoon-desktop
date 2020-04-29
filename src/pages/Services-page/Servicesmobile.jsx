import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile"
import MeetExperts from "../../components/MeetExperts/mobile";
import Banner from "../../components/Banner/mobile";
import Tab from "../../elements/Tabs/TabsMobile";

// Images
import BannerBg from "../../images/servicesBg.png";

const ServiceType = styled.div`
`;

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
`;

const Content = {
  Main: 'Acute Psychiatric Care',
  items:[
    {
      para: `At Sukoon, we provide round-the-clock acute psychiatric services that ensure safe and secure handling of all your emergency mental health needs. Our treatment plans and crisis interventions are personalized to your needs and requirements. Our services for mental health, and substance use concerns include:`,
        
        points: '<ul class="ml-10 dot-list "><li><strong>Pharmacological interventions</strong>: Bipolar affective disorder, delirium, complicated withdrawal of substances like alcohol, cannabis, heroin, cocaine</li><li><strong>rTMS</strong>: Acutely suicidal patients</li><li><strong>Comorbid conditions</strong>: Dehydration, diabetes, ketoacidosis, seizure, confusional state, dyselectrolytemia</li></ul>',

    },
    {
      para: `We are able to provide unmatched care, and world class acute psychiatric services both for hospitalization, and emergency because at Sukoon you will have:`,
        
      points: '<ul class="ml-10 dot-list pb-2"><li>24*7 access to resident doctors</li><li>24*7 Psychiatrists and psychiatric nurses</li><li>A dedicated floor equipped for psychiatric emergency services with a walk-in facility</li><li>Access to ambulance services across Delhi, Faridabad, Gurugram, and Noida </li><li>Access to other on-call super specialists</li><li>24x7 National mental health helpline (+91 837 680 4102)</li></ul>',
    },
    {
      title: 'Our Approach',
      para:`Our main objective is to stabilize the individual and assess the acute psychiatric symptoms and related mental health diagnosis. Typically, patients stabilise in 7-10 days. Throughout your stay in the acute psychiatric unit, you will have:`,
      points: '<ul class="ml-10 dot-list "><li>An independent Psychiatrist</li><li>A personal clinical Psychologist assigned to you</li><li>One nurse dedicated to address your needs</li><li>24*7 on-duty doctor for any medical concerns</li><li>ASpecialized care via a team of Art based therapist, nutritionists, physiotherapists, and yoga instructor</li></ul>',
    },
      {
          para:'At Sukoon, we provide a comfortable, safe, and private environment for you to recover and stabilise from a psychiatric crisis through state-of-the-art ICUs.'
      }
  ]
};

const Content2 = {
  Main: 'Intensive Care Unit',
  items:[
    {
      para: `At Sukoon, we have Psychiatric Intensive Care Units that provide a controlled and safe environment for short-term management of individuals experiencing severe mental health issues. It may be difficult to manage the situation at home or in an open psychiatric setting. This can be due to medical and psychological complications, risk of absconding, challenging behaviours, or violence.`
        
    },
    {
      para: `Our ICUs minimise the risk of self-harm and injury. They are the first of its kind in India with: `,
        points: '<ul class=" ml-10 dot-list "><li>Soft padded walls</li><li>Padded furniture</li><li>One nurse dedicated to address your needs</li><li>24*7 dedicated nurse </li><li>24*7 supervision and monitoring</li><li>Accessibility friendly (handrails, two-way incline hospital bed with rails)</li></ul>',
    },
  ]
};

const Content3 = {
  Main: 'Alcohol De-addiction',
  items:[
    {
      para: `At Sukoon, we aim to provide medical, psychological, and emotional support for individuals struggling with alcohol abuse. Our team of Psychiatrists, Psychologists, nurses, and therapists ensure that you get personalized care at every step of your recovery journey as we offer hospitalisation, rehabilitation, and support services for alcohol deaddiction. `
    },
    {
      title: 'Our Approach',
      para: `Our comprehensive treatment includes:`,
      points: '<ul class="ml-10 number-list "><li><strong>Detoxification</strong>: Medical management of withdrawal symptoms like tremors, increased heart rate etc.</li><li><strong>Deaddiction</strong>: Assessment of motivation and regular therapy sessions with the assistance of Psychiatrists and Psychologists.</li><li><strong>Maintenance and after care</strong>: Includes weekly group therapy sessions focused on maintaining sobriety. Family therapy sessions are held to deal with the interpersonal relationship concerns which can reinforce the process of recovery.</li><li><strong>Relapse prevention</strong>: Help you recognise warning signs of relapse and cope with difficult life situations to achieve a positive outcome. Regularly scheduled follow ups at the OPD. Provision of anti-craving as well as deterrent agents to prevent relapse.</li></ul>',
    },
    {
      para:`We are also equipped to assess and handle alcohol related complications such as delirium tremens, alcoholic hallucinosis, withdrawal seizures etc. Our psychiatric ICUs offer a safe and medically sound environment for you to stabilise and recover in a comfortable and protected setting.`
    }
  ]
};

const Content4 = {
  Main: 'Drug De-addiction',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `At Sukoon, our highly skilled team of addiction experts consists of Psychiatrists, clinical Psychologists, counsellors and arts based therapists. A comprehensive drug recovery program ensures that we address all aspects of drug addiction such as biological dependence, psychological challenges, unhelpful behavioural patterns and social support. We follow an integrated approach to management and offer de-addiction in various substances:`,
        
        points: '<ul class="ml-10 dot-list  pb-2"><li>Tobacco dependence</li><li>Cannabis (Marijuana) dependence</li><li>Inhalant dependence (glue sniffing, petrol, paint solvents)</li><li>Drug dependence (cocaine, heroin, MDMA)</li><li>Dependence on stimulants like amphetamine, caffeine etc.</li></ul>',
    },
    {
      title: 'Our Approach',
      para: `We ensure round the clock assistance for all your drug recovery challenges and our treatment involves: `,
        
        points: '<ul class="ml-10 number-list "><li><strong>Detoxification</strong>: Management of the psychological as well as physical withdrawal symptoms under the supervision of a team consisting of a Psychiatrist, a Clinical Psychologist and an Art based Therapist.</li><li><strong>Deaddiction</strong>: Assessment and enhancement of the motivation for consumption with individuals as well as group therapy sessions.</li><li><strong>Relapse prevention</strong>: Targeted therapy sessions for improving coping response  and handling high risk situations.</li><li><strong>Continued care/ Rehabilitation</strong>: Regularly planned individual, group and family therapy sessions aiming at prevention of relapse.</li></ul>',
        
    },
    {
      para:`Our focus is not just the body and mind but also the environment, friends/peers, family of the patient. We also provide Repetitive Transcranial Magnetic Stimulation (rTMS) for the treatment of addictions. rTMS has been researched to be an effective treatment modality for the same.`
    }
  ]
};

const Content5 = {
  Main: 'Habit De-addiction',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `At Sukoon we follow a comprehensive approach in management of habit de-addiction using treatment tools like pharmacotherapy, brain stimulation, psychotherapy, etc which target the biological and psychological components of the illness. The psychosocial issues faced by the individual and their family are also addressed in psychotherapy. Our team offers treatment for  various mental health conditions associated with increasing technology which are as follows:`,
        
      points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Internet gaming addiction</li><li>Mobile addiction</li><li>Gambling disorder etc.</li><li>Pornography addiction</li><li>Sex addiction</li></ul>',
        
    },
    {
      title: 'Our Approach',
      para: `Our team creates a tailor-made treatment plan for the patients which includes detoxification, deaddiction, relapse prevention and rehabilitation. A multidisciplinary team involving a Psychiatrist, a Clinical Psychologist and an Art  based Therapist work towards assessing, diagnosing and managing the various kinds of habit addictions.`,
    
        points:'<p class="content-para">At Sukoon we give due emphasis to group and family sessions in addition to individual sessions. This is often required to resolve interpersonal relationship concerns. Our clinical team believes that resolving the difficulties faced by the families/caregiver is a crucial part of an individual’s recovery and prevents further relapses which is a hallmark of this illness.<p>'
    },
  ]
};

const Content6 = {
  Main: 'Sukoon At Home',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `We, at Sukoon, make our services accessible to home-bound individuals living with mental and physical disabilities and individuals with mental health conditions in the geriatric age group. Our highly trained team of Psychiatrists, Psychologists, Art based therapists, and nurses offer empathetic and personalized treatment for:`,
        
      points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Individuals with mental health conditions and physical disabilities</li><li>Elderly patients, and others.</li></ul>',
        
    },
    {
      title: 'Our Approach',
      para: `Our team aims at providing effective pharmacological and psychological interventions for various mental health conditions. The treatment includes various assessments to prepare a tailor-made management plan in keeping with the patients specific needs. We also prioritize mental health care of the family and the caregivers.`,
    
        points:'<p style="font-size:15px;color: #636363;"><i>Treatment objectives include reintegration into society, enhancing social skills, developing interpersonal skill development and fostering independent living.</i><p>'
    },
  ]
};

const Content7 = {
  Main: 'Geriatic Psychiatry',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `We, at Sukoon, have a unique service for the elderly with the purpose of prevention, evaluation, diagnosis and treatment of psychiatric disorders in them. Our team consisting of skilled Psychiatrists, Psychologists, and Art based therapists have ample experience in treating various disorders of the elderly such as:`,
        
      points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Organic conditions: Dementia in Alzheimer’s disease, vascular dementia, dementia in other diseases etc. </li><li>Stress related disorders: Acute stress reaction, adjustment disorder, somatoform disorders etc.</li><li>Mood disorders: Depression, dysthymia, generalised anxiety, panic disorder etc.</li><li>Psychiatric difficulties arising out of physical ailments, conditions, and ambulatory concerns</li><li>Empty nest syndrome and migration of young family members which can cause loneliness </li></ul>',
        
    },
    {
      title: 'Our Approach',
      para: `Sukoon understands the challenges of aging at a biological, psychological and social level and addresses them by providing robust and holistic treatments. Our management plans include both pharmacological as well as psychological therapy (Individual and group). Our facility is equipped for specialised requirements of the elderly such as:`,
    
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Dedicated floor for geriatric age group</li><li>Daily physiotherapy sessions</li><li>Infrastructure which is geriatric friendly</li><li>Lift access to each floor including the basement</li></ul>',
    },
      {
          para:'We recognise that access to treatment is a major barrier in the mental health care of the elderly. Therefore we provide most of our hospitalisation treatments as part of a home based care program for the geriatric population as well.'
      }
  ]
};

const Content8 = {
  Main: 'Women Focused Care',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `At Sukoon, we provide in-patient services focused specifically on the mental health needs of women.  Our services focus on and are designed keeping in mind the specific needs of women with anxiety, depression and other mental health concerns. Often reproductive cycle changes, hormonal imbalances and life stressors can cause increased vulnerability to mental health conditions and emotional disturbances. We offer an integrated management plan carried out by a team of highly trained Psychiatrists, Psychologists and therapists for various mental health conditions experienced uniquely by women such as:`,
        
      points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Psychiatric conditions that may develop during pregnancy and postpartum such as depression, psychosis, etc.</li><li>Stress and trauma related to infertility or pregnancy loss</li><li>Premenstrual mood difficulties</li><li>Emotional changes and other psychiatric symptoms due to transition to menopause</li><li>Coping with mental health strains and anxieties to uterine cancer, breast cancer, hysterectomy or any other gynaecological conditions</li></ul>',
        
    },
    {
      title: 'Our Approach',
      para: `At Sukoon we recognize that reproductive transitions like pregnancy, postpartum and menopause heighten the risk for developing mental health concerns for women. We aim to provide a safe and protected environment to prioritise the needs of the mother and the new born child along with addressing all your mental health requirements. Our facility is equipped for specialised requirements of the women such as:`,
    
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Crisis intervention unit made available specifically for women and children</li><li>Dedicated women-only Psychiatric ICU with soft padded walls, padded furniture and a 24*7 dedicated nurse</li><li>Exclusive residential floor for inpatient treatment for women </li><li>Floor access to female-only staff of nurses, Psychiatrists, Clinical Psychologists and Art based Therapists</li><li>Female attendants only</li><li>Safe treatment options like rTMS that minimize impact on the foetus</li><li>Highly skilled and experienced on-call experts</li></ul>',
    },
      {
          para:'A support group for women is facilitated each day with art activities to provide a creative outlet and a visual form of communication to express themselves in addition to other various IPD activities.'
      }
  ]
};

const Content9 = {
  Main: 'Child and Adolescent Services',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `Sukoon offers residential and out-patient care services for children and adolescents requiring mental health treatment. A dedicated team of child Psychologists and Psychiatrists assist the child and their family in creating an individualised treatment plan after a thorough evaluation and clinical assessment of their academic, social, behavioural and emotional difficulties. A residential floor exclusively assigned for children and adolescents ensures a safe and nurturing environment for young individuals.`,
        
      points: '<p class="content-para">Sukoon is also a part of the nation-wide run Fortis School Mental Health Program. This program provides workshops, skill training and outreach services to school students, parents and teachers all year round with the aim of spreading awareness about positive child and adolescent mental health. </p>',
        
    },
    {
      title: 'Our Approach',
      para: `Sukoon’s expert team is experienced in diagnosing, conducting psychological assessments, and treating children using various psychotherapeutic modalities. Expressive arts are used as a means of psychotherapy with mediums such as art, drawing, painting, sculpture, music, dance-movement, clay, creative writing, story-telling and drama. In addition, we also provide play therapy for younger children in both individual as well as group formats.  A special focus is made on the stress, anxiety and depression common amongst young children, especially during exam season. `,
    },
  ]
};

const Content10 = {
  Main: 'Clinical Psychology',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `At Sukoon, we have a team of licensed clinical psychologists who are recognised by the Rehabilitation Council of India. They are experts in carrying out psychometric and diagnostic evaluations for: `,
        
      points: '<ul class="ml-10 dot-list "><li><strong>Developmental delays</strong>: Speech disorders, behavioural disorders, motor disorders, autism etc </li><li><strong>Intellectual and academic functioning</strong>: Learning disabilities, dyslexia, ADHD, ADD etc</li><li><strong>Clinical Psychopathology</strong>: Anxiety, OCD, phobia, depression, bipolar, psychosis, schizophrenia etc</li><li><strong>Personality patterns</strong>: Borderline traits, anxious avoidant, obsessive compulsive traits, narcissism etc </li><li><strong>Neuropsychological functioning</strong>: Dementia, cognitive disorders, memory decline etc</li></ul>',
        
    },
    {
      title: 'Our Approach',
      para: `Our team of clinical psychologists, along with psychiatrists, specializes in the diagnosis and treatment of clinical, emotional, adjustment, and behavioural disorders. At Sukoon, we are committed to improving the overall quality of our patients’ lives, and not just relieving the symptoms temporarily. We offer a wide array of psychotherapy services for individuals, couples, families and groups. This brings about lasting and meaningful changes to our patient’s life. Our dedicated team of mental health professionals provide empathetic and personalized care round the clock.`,
    },
  ]
};

const Content11 = {
  Main: 'Counselling Psychology',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      para: `Our Counselling Psychologists (therapists) facilitate coping for individuals and families with life situations that may be overwhelming or debilitating. At Sukoon, we focus on how people function individually, in families, and socially. Our world class team of mental health professionals provide holistic care for:`,
        
      points: '<ul class="ml-10 dot-list "><li><strong>Relationship counselling</strong>: Marital counselling, family therapy, partner conflict, pre-marital counselling, domestic violence, intimate partner abuse etc.</li><li><strong>Academic counselling</strong>: School stress, exam stress, higher education concerns, bullying, peer pressure, anxiety etc.</li><li><strong>Workplace counselling</strong>: Work life balance, career decision making, retirement transition, conflict resolution, organizational problems etc.</li><li><strong> LGBTQ+ mental health concerns</strong>: Coming out, family counselling, homonegativity, GID certification, queer informed relationship counselling, handling gender based discrimination etc.</li><li><strong>Learning and skill building</strong>: Confidence building, assertiveness training, time management, communication difficulties etc</li><li>Coping with physical disabilities, disease or injury</li><li>Counselling for Caregivers </li><li>Anger management</li><li>Stress management </li></ul>',
        
    },
    {
      title: 'Our Approach',
      para: `At Sukoon, we take therapist-patient confidentiality seriously. Throughout our facility we have taken measures to ensure that your conversations remain private. Our therapy rooms are equipped with the following amenities:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Comfortable seating (sofas, high chairs - take your pick) </li><li>Spacious rooms with ample sunlight</li><li> White noise sound machines to prevent eavesdropping </li><li>Plants, plants, and more plants! </li></ul>',
    },
  ]
};

const Content12 = {
  Main: 'Art Based Therapy',
  Summary:  ` Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
    
  items:[
    {
      para: `Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
        
      points: '<ul class="ml-10 dot-list "><li><strong>Psychiatric disorders</strong>: Depression, Anxiety, OCD, Psychosis, Bipolar disorder etc.</li><li><strong>Behavioral disorders</strong>: Aggressive outbursts, disregarding authority etc.</li><li><strong>Developmental disorders</strong>: ADHD, ADD, individuals with special needs etc.<li>Trauma and abuse</li><li>Anger Management</li></ul>',
        
    },
    {
      para: `For individuals, groups, and corporates we use Art Based Therapy to address the following: `,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Confidence and motivation building </li><li>Leadership skills</li><li>Stress management </li><li>Assertiveness</li><li>Interpersonal skills and building effective communication patterns</li><li>Coping with serious or chronic illness </li><li>Facilitating support groups</li></ul>',
    },
      {
      title: 'Our Approach',
      para: `Our priority is to help facilitate a patient's expression. For this we use various mediums such as visual arts - drawing, painting, clay, crafts, pottery, sculpture, 3-D modelling, music, storytelling, creative writing, movement, and dance. Every patient is unique and hence, we personalise treatment as per their comfort, and needs. At Sukoon our aim is to create a safe, non-judgemental, and contained space with all our patients via an independent art therapy studio that boasts of:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>A spacious glass room on the terrace</li><li>A lush green terrace garden for outdoor activities</li><li>Variety of art materials (paints, potter’s clay, textile etc – take your pick! )</li><li>Private and confidential storage space</li></ul>',
    },
      {
      para: `Sukoon explores art based therapy across all age groups, skill, and functioning levels by involving different creative techniques.`,
    },
  ]
};

const Content13 = {
  Main: 'rTMS (Repetitive transcranial magnetic stimulation)',
  Summary:  ` Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
    
  items:[
    {
      para: `Repetitive Transcranial Magnetic Stimulation (rTMS) is a non-invasive and non-pharmacological  (no anaesthesia) treatment. It is an absolutely painless (both physical and psychological) alternative to traditional treatment methods. rTMS compared to other brain stimulation techniques (mECT, tDCS, CESS etc.) does not have any side effects. Since rTMS intervention does not require any pre or post session monitoring, it can be used as a convenient out-patient procedure.`,
        
      points: '<p class="content-para">At Sukoon we use world class rTMS machines to provide relief from psychiatric and organic conditions such as:</p>',
        
    },
    {
        points: '<ul class="dot-list  pb-2 mt-2"><li>Depression</li><li>Anxiety Disorders</li><li>Obsessive Compulsive Disorder (OCD)</li><li>Addiction problems (for craving management)</li><li>Auditory hallucinations</li><li>Autism</li><li>Bipolar affective disorder</li><li>Chronic Schizophrenia</li><li>Attention Deficit Hyperactivity Disorder</li><li>Eating disorders</li><li>Chronic Tinnitus</li><li>Parkinson’s disease</li></ul>',
    },
      {
      title: 'Our Approach',
      para: `At Sukoon we strive to make the rTMS treatment as effective as possible for the patient as well as their caregivers by providing:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>rTMS sessions that are brief but intensive (typically last between 15 - 45 minutes)</li><li>A dedicated therapy room to comfortably seat the patients along with their family, friends, or attendants</li><li>Highly trained and caring technical staff</li><li>Lush green environment</li><li>60” inches TV with a video menu</li></ul>',
    },
      {
      para: `Our team is highly experienced in providing rTMS therapy in an integrated manner (pharmacotherapy and psychotherapy) and at the same time ensuring personalized care.`,
    },
  ]
};

const Content14 = {
  Main: 'Remediation',
  Summary:  ` Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
    
  items:[
    {
      para: `Special educators, through the use of specific and multi-sensory techniques, and individualized education plans, assist children with learning disabilities, intellectual disabilities, attention deficits and other developmental concerns to cope with the academic demands and learning challenges. At Sukoon, we offer tailor-made plans customised to the specific needs and abilities of all children. `,
    },
    
      {
      title: 'Our Approach',
      para: `At Sukoon, our dedicated special educators provide individualised care to your child. They value the unique strengths and potentials of each child and work towards enhancing these to build brighter academic and learning futures by:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Providing research based and scientifically sound teaching methods</li><li>Working step-by-step and covering all necessary content</li><li>Ensuring the remediation work takes into account the pace of the student</li><li>Offering regular follow ups and practice exercises to enhance learning and assimilation of new knowledge </li><li>Regular evaluations to monitor the child’s progress</li></ul>',
    },
  ]
};

const Content15 = {
  Main: 'Psychoanalytical Therapy',
  Summary:  ` Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
    
  items:[
    {
      para: `At Sukoon, our Psychoanalytic Therapists have received extensive training in bringing unconscious thoughts and feelings to the conscious mind. This allows for repressed experiences and emotions, often from one’s childhood, to be brought to the surface and examined. It helps patients understand and resolve their problems by becoming increasingly aware of their inner world and its influence on their relationships, both past and present. This Freudian and post Freudian approach of therapy provides an effective treatment for a range of psychological disorders such as:`,
        
      points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Personality disorder: Borderline, histrionic, anxious avoidant, narcissistic, dependent, etc.</li><li>Relationship issues: Attachment difficulties, interpersonal conflicts, relational dynamics, etc.</li><li>Psychosomatic disorders: Unexplained aches and pains, illness anxiety, conversion, etc.</li><li>Self-destructive behaviour: Self harm behaviours, excessive risk taking, aggressive drives</li><li>Neurotic behaviour pattern: Eating disorder, Obsessive compulsive traits, etc.</li><li>Identity problems: Fixation, self-perception and self-image, incongruence, etc.</li><li>Dissociation: Depersonalisation, derealisation, etc.</li><li>Anxiety and Phobia</li><li>Emotion struggles or trauma</li><li>Sexual problems</li><li>Depression </li></ul>',
        
    },
    
      {
      title: 'Our Approach',
      para: `At Sukoon, we are committed to creating a safe therapeutic space that facilitates rapport building and self-disclosure and hence Therapist-Patient confidentiality is our top most priority. Throughout our facility we have taken measures to ensure that your conversations remain private. Our therapy rooms are equipped with the following amenities:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Comfortable couch</li><li>Spacious rooms with ample sunlight</li><li>White noise sound machines to prevent eavesdropping</li><li>Plants, plants, and more plants!</li></ul>',
    },
      {
      para: `We are committed to improving the overall quality of our patients’ lives, and not just relieve the symptoms temporarily. This brings about lasting and meaningful change to our patient’s life. Our dedicated team of psychoanalytic psychotherapists provide empathetic and personalized care.`,
    },
  ]
};

const Content16 = {
  Main: 'Occupational Therapy',
  Summary:  ` Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
    
  items:[
    {
      para: `Occupational therapy assists people in developing or improving their everyday activities in order to enhance their overall functioning and sense of accomplishment. It can be carried out individually, or in group settings. At Sukoon, we aid people from all ages and all abilities to gain independent functioning in all aspects of their lives.`,
        
      points: '<p class="content-para">Occupational therapy aims to build and strengthen cognitive, sensory and motor functioning and has been proven to be beneficial for:</p>',
        
    },
      {
          points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Aiding children with developmental disorders </li><li>Modifying tasks and simplifying learning for children with special needs </li><li>Reducing the impact of arthritis</li><li>Improving movement range for those with motor constraints</li><li>Boosting memory and cognitive skills<li>Coping with chronic pain</li></ul>',
      },
    
      {
      title: 'Our Approach',
      para: `At Sukoon, the occupational therapists address barriers to optimal functioning through individualized evaluations and tailored interventions that focus on:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Enhancing existing skills</li><li>Creating opportunities</li><li>Remediating or restoring skills</li><li>Modifying or adapting the environment or activity and preventing relapse</li></ul>',
    },
      {
      para: `We at Sukoon provide personalised services that support mental health, physical health, wellness, rehabilitation and recovery of the patient.`,
    },
  ]
};

const Content17 = {
  Main: 'Psychiatry',
  Summary:  ` Art Based Therapy is helpful with patients who have difficulty in verbal expression. At Sukoon, we have a team of Art based therapists certified by the British Association of Art Therapy, Health and Care Professions Council-UK, and UNESCO - Conseil International de la Danse. We use Art Based therapy as an add on or an alternative to therapy for: `,
    
  items:[
    {
      para: `At Sukoon, we strive to provide premium quality mental health treatment and care. Our Psychiatrists along with our team of Psychologists, Art based therapists, Counsellors and Nurses aim to provide comprehensive in-patient treatment for a variety of psychiatric conditions such as:`,
        
     points: '<ul class="ml-10 dot-list "><li><strong>Affective disorder</strong>: Bipolar disorder, unipolar depression, dysthymia etc.</li><li><strong>Stress related disorders</strong>: Generalised anxiety disorder, OCD, phobias, panic disorders</li><li><strong>Psychotic disorders</strong>: Schizophrenia, delusional disorder, schizoaffective disorder etc.</li><li><strong>Behavioural disorders</strong>: Eating disorders, sleep disorders, sexual dysfunction</li><li><strong>Substance abuse disorders</strong>: Alcohol, tobacco, cocaine, addiction to prescribed medications, habit addictions etc.</li><li><strong>Disorders related to children and adolescents</strong>: ADHD, intellectual and specific difficulties of learning, autism, children and adolescent emotional/behavioural issues.</li><li><strong>Psychiatric disorders related to pregnancy</strong>: Postpartum blues, postpartum depression, postpartum psychosis etc.</li></ul>',
        
    },
      
      {
      title: 'Our Approach',
      para: `At Sukoon, we are committed to creating an environment which is safe and effective in delivering high quality psychiatric treatment. Our setup has been developed to provide brief hospitalization with intensive treatment, and with continuity of care in community settings.  Our team of Psychiatrists are fully equipped to handle psychiatric emergencies and clients requiring in-patient treatment.`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>24*7 access to our Psychiatrists</li><li>Twice daily visits by our Psychiatrists during your in-patient stay</li><li>Rooms specifically designed for your safety and comfortable stay: Bright and airy rooms, comforts of a double bed, en-suite bathroom, shatter proof glass, attached and protected balconies etc.</li><li>Fully equipped psychiatric ICUs with soft padded walls, 24 hours nursing supervision  etc.</li><li>On call access to other specialities: to effectively manage organic mental conditions and comorbid medical conditions commonly seen with psychiatric disorders.</li></ul>',
    },
      {
      para: `You are our utmost priority and we make sure that you get the best quality treatment at Sukoon.`,
    },
  ]
};

const Content18 = {
  Main: 'Psycho - Oncology',
  Summary:  ` At Sukoon, we aim at providing psychological and emotional support for the patients, and their caregivers, to help cope with cancer and related issues. Psycho-oncology therapy deals with the psychological, social and behavioral aspects of cancer such as:`,
    
  items:[
    {
      para: `At Sukoon, we aim at providing psychological and emotional support for the patients, and their caregivers, to help cope with cancer and related issues. Psycho-oncology therapy deals with the psychological, social and behavioral aspects of cancer such as:`,
        
     points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Depression and anxiety: Low mood, feeling of helplessness, hopelessness and worthlessness etc.</li><li>Psychological concerns : Lack of motivation; uncertainty and negativity in life etc. </li><li>Biological concerns : Sleep disturbances, fertility problems etc.</li><li>Body image concerns due to chemotherapy</li><li>Side effect of medication </li><li>End of life counselling</li></ul>',
        
    },
      {
          para:'We also address the changes in the relationship between the caregiver and the patient, assist the change in focus from increasing survival and life expectancy to improving quality of life and development of palliative care. It also helps with de-stigmatisation of cancer and mental illness.'
      },
      
      {
      title: 'Our Approach',
      para: `Our team of Psychiatrists, along with Clinical Psychologists, creates a personalized treatment plans that involve:`,
        
        points: '<ul class="ml-10 dot-list  pb-2 mt-2"><li>Understanding psycho-oncology</li><li>Comprehensive psychosocial assessment for cancer patients</li><li>Interventions to enhance coping skills in cancer</li><li>Application of a range of psychological interventions</li><li>Improving communication and interpersonal skills in cancer care</li></ul>',
    },
      {
      para: `Sukoon also offers individual and support group therapy sessions through which psychotherapy is provided for patients with different needs.`,
    },
  ]
};


const OutPatienList = [
  {name: 'Clinical psychology ' , content: Content10, number: '1'},
  {name: 'Counselling psychology', content: Content11, number: '2'},
  {name: 'Art-Based Therapy', content: Content12, number: '3'},
  {name: 'rTMS Treatment', content: Content13, number: '4'},
  {name: 'Remediation', content: Content14, number: '5'},
  {name: 'Psychoanalytical  Therapy', content: Content15, number: '6'},
  {name: 'Occupational Therapy', content: Content16, number: '7'},
  {name: 'Psychiatry', content: Content17, number: '8'},
  {name: 'Psycho - Oncology ', content: Content18, number: '9'},
];

const ResidentialServicesList = [
  {name: 'Acute Psychiatry Care' , content: Content, number: '1'},
  {name: 'Intensive Care Unit', content: Content2, number: '2'},
  {name: 'Alcohol Deaddiction', content: Content3, number: '3'},
  {name: 'Drug Deaddiction', content: Content4, number: '4'},
  {name: 'Habit Deaddiction', content: Content5, number: '5'},
  {name: 'Sukoon At Home', content: Content6, number: '6'},
  {name: 'Geriatric Psychiatry', content: Content7, number: '7'},
  {name: 'Women Focused Care', content: Content8, number: '8'},
  {name: 'Child Psychiatry', content: Content9, number: '9'},
];
const InfoSection = (props) =>{

  return(
    <div className={`${props.wrapperClass || ''}`}>
      <h3 className="font-gilroyMedium mt-3 text-left text-sukoon leading-none">{props.title}</h3>
      <Para>
        {props.content}</Para>
        <div clasName="content" dangerouslySetInnerHTML={{__html: props.points}}></div>
    </div>
  )
};

const CareService = (props) =>{

  const[ListContent, setContent] = props.ContentNumber;

  function handleView(content){
    // Content bellow the tab is changed by the next function.
    setContent(content);
  }

  return(
    <section id={props.titleLight} className="p-4">
      <Title titleLight={props.titleLight} subHeading={props.subheading} titleBold={props.titleBold} display="block"/>
      <div className="flex flex-wrap overflow-x-hidden ">
        <TabList className="patient_services_nav flex overflow-y-hidden overflow-x-scroll">
          {props.list.map((item)=>{
            return (
            <li className="mt-3">
            <Tab onClick={handleView} argument={[item.content]} active={ ListContent === item.content} buttonClass={``}>
              {item.name}
            </Tab>
            </li>
            )
          })}
        </TabList>
        <ServiceType className="service_content mt-2 overflow-x-hidden text-justify">
          {ListContent.items.map((content)=>{
            return(
              <InfoSection title={content.title} content={content.para} points={content.points} />
                
            )
          })}
        </ServiceType>
      </div>
    </section>
  )
};

function Services(props) {

  return (
    <>
      <Banner captionLight={`Feel like`} bannerPara={`We’re here for you. At Sukoon, our experienced team of psychiatrists, clinical psychologists, therapists, and nurses provide compassionate, short-term and inpatient psychiatric and mental health services that help you feel better as quickly as possible. We work with you one-on-one ensuring that every part of your care is personalised to your condition, emotions, and needs.`} captionBold={`Yourself Again`}  overlay={props.overlay} backgroundImg={BannerBg}/>
      <CareService list={ResidentialServicesList} subHeading={`IPD`} titleLight="Residential" titleBold="Care Services" ContentNumber={useState(Content)}/>
      <CareService list={OutPatienList} subHeading={`OPD`} titleLight="Out Patient" titleBold="Care Services" ContentNumber={useState(Content10)}/>
      <MeetExperts/>
    </>
  );
}

export default Services;
