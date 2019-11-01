import React ,{useState} from "react";
import styled from "styled-components";

// Components
import Banner from "../../components/Banner/desktop";
import Title from "../../elements/Heading/desktop"
import Para from "../../elements/Para/desktop";
import Tab from "../../elements/Tabs/TabsDesktop";
import Details from "../../elements/Details/desktop";

// Images
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";
import SukoonBgLogo from "../../images/sukoon-bg-logo/logo@2x.jpg";

const General = {
  tab:'General',
  Questions:[
    {
      summary: 'What does it mean to have a mental illness?',
      description:
        "Mental illnesses are health conditions that disrupt a person’s thoughts, emotions, relationships and daily functioning. They are associated with distress and diminished capacity to engage in the ordinary activities of daily life. It is important to know that mental illnesses are medical conditions that have nothing to do with a person’s character, intelligence or willpower. Just as diabetes is a disorder of pancreas, mental illness is a medical condition of brain biology. Additionally, these illnesses also have psychological and social factors.",
    }
    ,
    {
      summary: 'Who does mental illness affect?',
      description:
      "Although mental illness can affect anyone, it is estimated 7.5% of Indians suffer from a serious mental disorder. However, some illnesses may be more common in certain sections of population such as attention deficit hyperactivity disorder in children and eating disorders in females.Additionally, all ages are susceptible but young and old are particularly vulnerable. Mental illnesses usually strike individuals in the prime of their life, with 75% of mental health conditions developing in early adulthood.",
    }
    ,
    {
      summary: 'What causes mental illness?',
      description:
      "Although the exact source of mental illness is not known, research points to a mix of genetic, biological, psychosocial and environmental factors as leading to mental illnesses.",
    }
    ,
    {
      summary: 'What are the general warning signs of mental illness?',
      description:`
        Symptoms of mental health disorders vary depending on the type and severity of the condition. Usually, the presence of a combination of the following symptoms may be seen problematic:

        In adults:
            • Confused thinking
            • Long lasting sadness or irritability
            • Extreme highs and lows in mood
            • Excessive fear, worrying or anxiety
            • Social withdrawal
            • Dramatic changes in eating or sleeping habits
            • Strong feelings of anger
            • Delusions or hallucinations
            • Increasing inability to cope with daily tasks
            • Thoughts of suicide
            • Denial of obvious problems
            • Many unexplained physical problems
            • Substance abuse
        In older children/teens:
            • Abuse of drugs or alcohol
            • Inability to cope with daily tasks
            • Excessive complaints of physical ailments
            • Changes in sleep and eating habits
            • Defying authority, school refusal, stealing, damaging property
            • Intense fear of gaining weight
            • Long lasting negative moods
            • Thoughts of death, suicide and self harm
        In younger children:
            • Changes in school performance
            • Poor grades despite efforts
            • Excessive worrying and anxiety
            • Hyperactivity
            • Persistent nightmares
            • Persistent disobedience
            • Aggressive behaviours
            • Frequent temper tantrums
            • Frequent bedwetting
            • School refusal
    `,
    }
    ,
    {
      summary: 'Who is at risk of developing a mental illness?',
      description:`
      Certain factors may increase your risk of developing mental health problems, including:
        • Having a blood relative, such as a parents or sibling, with a mental illness
        • Stressful life situations, such as financial problems, death of loved one or a divorce
        • On going chronic medical condition such as cancer, diabetes
        • Traumatic brain injury
        • Traumatic experiences
        • Use of alcohol or recreational drugs
        • Being abused or neglected as a child
        • Lack of social support
        • A previous mental illness
      `
    }
    ,
    {
      summary: 'What are the different types of mental health professionals providing treatment?',
      description:`
      Psychiatrist
      A Psychiatrist is a medical doctor who has done a MBBS and a postgraduate specialization in mental health. A psychiatrist prescribes medication and it is primarily the focus of their session

      Clinical Psychologist
      A clinical psychologist completes an undergraduate, post graduate and  MPhil  degree in Clinical Psychology. They receive intensive training in learning about mental health conditions, how the brain functions, what drives and controls behavior, how mental illness manifests, general psychological principles and how to assess and treat a full range of mental conditions. 

      Counselling Psychologist
      A Counselling psychologist completes up to a postgraduate training in psychological principles and therapies.
      `
    }
    ,
    {
      summary: 'Can people with mental illnesses recover?',
      description:`
      When healing from mental illness, early identification and treatment are of vital importance. Based on the nature of illness, there are a range of effective treatments available. For any type of treatment, it is imperative that the person affected is proactive and fully engaged in their recovery process.  
      Many people with mental illnesses who are diagnosed and treated respond well, although some might experience a return of symptoms. Even in such cases, careful monitoring and management of the disorder, it is still quite possible to live a fulfiled and productive life. 
      `
    }
    ,
    {
      summary: 'How can I help a friend or family member who I believe may have a mental health problem?',
      description:`
      It can be difficult to know how to help a loved one who seems to be struggling with mental illness. Once you know the signs and symptoms, you may feel comfortable gently approaching your friend or family member. Mention that you have noticed a change in behavior and that you are concerned. Let your loved one know that you are here to listen, without judgement. When the time is right, you can encourage him or her to seek help at a treatment center.
      `
    }
    ,
  ]
};

const Assessment = {
  tab:'Assessment',
  Questions:[
    {
      summary: 'What is a psychological assessment?',
      description
        :
        "Also called a psychological evaluation, the tests we use allow us to assess a client’s abilities and overall functioning, including areas that need special attention and areas of great potential. The evaluation actually consists of multiple tests, designed to gather information to plan for developmental, educational, vocational, social or emotional needs, and to assess a client’s overall functioning and make recommendations.",
    }
    ,
    {
      summary: 'Why should someone undergo psychological assessment?',
      description
        :`
        Psychological assessment can:
          • provide a measure of intellectual functioning and potential
          • identify learning styles and/or learning disorders
          • clarify diagnosis when complex symptoms and behaviors are present
          • assess for giftedness, developmental delays or Autism Spectrum Disorder
          • identify underlying factors that may be impacting one’s interpersonal relationships, motivation, functioning at school or work, social-emotional functioning or challenges managing impulses and behavior
        Before beginning the psychological evaluation, it’s recommended that one should get proper medical examination done to rule out all medical or physical factors that may be affecting one’s life Example, you should have your vision and hearing tested if there is an indication that this could be part of the problem.`,
    }
    ,
    {
      summary: 'How will psychological assessment help me?',
      description
        :
        "Psychological assessment will not only help in better self-understanding or understanding of your personal attributes rather it will provide you and your psychologist with a better opportunity to identify and work towards factors that have been contributing to the difficulties being faced by you I n your personal, social, interpersonal or professional sphere.",
    }
    ,
    {
      summary: 'Do I need to stay in hospital for testing?',
      description
        :
        "No, you will not typically be admitted to hospital for psychological testing, but will be seen as an outpatient.",
    }
    ,
    {
      summary: 'Am I allowed to take my medication before my appointment?',
      description
        :
        `Yes, continue taking all regularly prescribed medication as usual.`,
    }
    ,
    {
      summary: 'Does one need to study for this type of test?',
      description
        :
        ` No special preparation is required.`,
    }
    ,
    {
      summary: 'Does one need to give blood for such assessments?',
      description
        :
        `No blood test is required. These are generally paper-pencil and performance based tests.`,
    }
    ,
    {
      summary: 'Can my family members stay in the room with me during testing?',
      description
        :
        ` No, none of the family members are permitted as it can cause distraction in the assessment process. However, family may be required to complete tests regarding the patient separately.`,
    }
    ,
    {
      summary: 'How will psychological assessment help me?',
      description
        :
        `Psychological assessment will not only help in better self-understanding or understanding of your personal attributes rather it will provide you and your psychologist with a better opportunity to identify and work towards factors that have been contributing to the difficulties being faced by you I n your personal, social, interpersonal or professional sphere.`,
    }
    ,
    {
      summary: 'What are the various types of psychological assessments?',
      description
        :
        `Intelligence tests
        The objective of an intelligence test, also known as an intelligence quotient (IQ) test, is intended to evaluate intelligence. It assesses the effectiveness of a person's mental processes, understanding and reasoning and the ability to recall information. 

        Achievement and aptitude tests
        Achievement and aptitude tests aim to measure either how knowledgeable or skilled an individual is about a certain topic, how an individual reacts to different situations or someone's proficiency in a particular area. Achievement and aptitude tests include logical reasoning, spatial ability, vocabulary tests, numerical reasoning and verbal reasoning.

        Assessment of learning difficulties
        Learning difficulties tests mainly attempt to identify patterns in learning and ability indicative of a Learning Disability so that appropriate referrals can be made.
        Personality tests
        There are many different types of personality tests but each aim to measure an individual's personality, pattern of behaviour, thoughts and feelings and is mostly used in research to help with clinical diagnoses. 

        Vocational tests
        The objective of an occupational test, usually administered by a psychologist, is to find out whether a particular occupation is suited for an individual which matches an individual's interest with the interests of others in known careers.

        Specific clinical tests
        Clinical psychological tests are administered to measure specific clinical issues, such as an individual's level of anxiety, fear or depression. They can rule out or determine whether someone has a particular psychological disorder and can help in evaluating and diagnosing psychological disorders.

        Neuropsychological tests
        Neuropsychological tests are scientifically validated objective tests. They are administered to attempt to measure brain function related to a person's lack of thinking, speaking or reasoning due to brain injury. The tests, which range from simple motor performance to complex reasoning and problem solving, are usually taken in a quiet environment that is free from distractions with the person's score compared to people with no brain injury and people with various kinds of brain injury. `,
    }
    ,
    {
      summary: 'What happens when testing is complete?',
      description
        :
        `The psychologist analyses the data in detail and prepares a comprehensive psychological report. This also includes well-integrated explanation of results along with individualized and evidence-based recommendations. 
        Once the report is complete, a report discussion is scheduled during which the findings are explained and your questions are answered.
        Additionally, at the end of the report discussion the therapist discusses their recommendations regarding further assessments and treatment plan with you.`,
    }
    ,
    {
      summary: 'Will I get a copy of my test results?',
      description
        :
        `Yes, at the feedback session you will be provided with a copy of the psychological evaluation. Included in the report will be the scores obtained from the tests in addition to recommendations based on the results.
        Depending on the reason for testing, with permission, psychologists also meet with others, such as school officials or treatment providers, to review the report and plan further course of action `,
    }
    ,
    {
      summary: 'How will psychological assessment help me?',
      description
        :
        `Psychological assessment will not only help in better self-understanding or understanding of your personal attributes rather it will provide you and your psychologist with a better opportunity to identify and work towards factors that have been contributing to the difficulties being faced by you I n your personal, social, interpersonal or professional sphere.`,
    }
    ,
    {
      summary: 'Do I need to stay in hospital for testing?',
      description
        :
        `No, You will not typically admitted to hospital for psychological testing, but will be seen as an outpatient. `,
    }
    ,
    {
      summary: 'What happens when testing is complete?',
      description
        :
        `The psychologist analyzes the data in detail and prepares a comprehensive psychological report. This also includes well-integrated explanation of results along with individualized and evidence-based recommendations. 
        Once the report is complete, a report discussion is scheduled during which the findings are explained and your questions are answered. `,
    }
    ,
    {
      summary: 'Will I get a copy of my test results?',
      description
        :
        `Yes, at the feedback session you will be provided with a copy of the psychological evaluation. Included in the report will be the scores obtained from the tests in addition to recommendations based on the results.
        Depending on the reason for testing, with permission, psychologists also meet with others, such as school officials or treatment providers, to review the report and plan further course of action.`,
    }
    ,
  ]
};

const Treatments = {
  tab:'Treatments',
  Questions:[
    {
      summary: 'Why do I need to stay at the hospital?',
      description
        :
        `You might consider hospitalization if you:
        • Have thoughts of hurting yourself or others
        • Are seeing or hearing things (hallucinations)
        • Have bizarre or paranoid ideas (delusions)
        • Are so revved up or impulsive that its leading dangerous or harmful actions
        • Can’t stop using alcohol or other psychoactive substances in harmful ways
        • Have not eaten or slept for several days
        • Have tried outpatient treatment (therapy, medication and support) and it hasn’t improved your condition
        • Need to make a major change in your treatment or medication under the close supervision of the doctor.`,
    }
    ,
    {
      summary: 'How can hospitalization help?',
      description
        :
        `Hospitalization is intended to create a safe place to allow severe symptoms to pass and medication to be adjusted and stabilized. It is not a punishment or intended as a means to restrict you punitively in any manner. 
        • You can work with professionals to stabilize your severe symptoms, keep yourself safe and learn new ways to cope with your illness. 
        • You can learn skills to help you manage overwhelming feelings or disturbing thoughts
        • You can safely stop using alcohol or other substances.`,
    }
    ,
    {
      summary: 'How long will I be hospitalized for?',
      description
        :
        `Hospitalizations can last anywhere from one or two days to several weeks. The length of a hospital stay is determined by several factors:
        • Severity of illness
        • Patient’s participation in treatment and insight into his or her condition
        • Patient’s mental status and improvement since admission
        • Situation into which the patient is being discharged—in other words, whether the patient will have a supportive environment with appropriate outpatient treatment after leaving the hospital.`,
    }
    ,
    {
      summary: 'Would my family member be required to stay with me during my hospital stay?',
      description
        :
        `As per hospital protocols, we do not think it is compulsory for family members to stay with the patient. However anyone wishing to stay will be facilitated in a manner in which it doesn’t interfere with treatment and well being of the patient. In our experience we have found that recovery is best when there is minimal emotional stimulation and distraction.`,
    }
    ,
    {
      summary: 'Will I have any side effects due to my medications?',
      description
        :
        `Every medication that brings a change in bodily symptoms also may have extra effects which are often termed as side effects. In practice, these extra effects can be handled medically and often be used as means of symptom resolution.
        It is important that you and your doctor work together to make sure your medications are working safely and effectively. You should talk with them about how you are doing and if there are any other effects that make you unwilling to continue treatment. They will work with you to develop strategies for minimizing these side effects, or will create a plan for switching to a different treatment that will be a better fit.`,
    }
    ,
    {
      summary: 'If I feel better after taking medication, does this mean I am "cured" and can stop taking it?',
      description
        :
        `As per international guidelines and our experience, every disorder related treatment has a specific maintenance schedule for medication which should be completed for lasting effects and preventing future relapses.
        It is not uncommon for patients to stop taking their medication when they feel their symptoms are under control. Other patients may choose to stop taking their medication because of its side effects, without realizing that most side effects can be effectively managed. While it may seem reasonable to stop taking the medication, the problem is that most often, the symptoms will return when maintenance phase is not completed. Therefore, it is very important that you work together with your doctor before making decisions about any changes in your treatment.`,
    }
    ,
    {
      summary: '',
      description
        :
        ``,
    }
    ,
  ]

};
const Psychotherapy = {
  tab:'Psychotherapy',
  Questions:[
    {
      summary: 'What is psychotherapy?',
      description
        :
        "Psychotherapy is often called “the talking cure”. It is a form of treatment for dealing with life’s problems. It is a process that unfolds as clients talk about their difficulties with a therapist trained to bring about relief from distress and resolution of obstacles. The ultimate goal is for the client to find fulfilment by fostering changes in problematic thoughts, feelings and actions.",
    }
    ,
    {
      summary: 'What does psychotherapy consist of?',
      description
        :
        "One of the key objectives of psychotherapy is to help you gain a better understanding of the issues that are troubling you. It can help you work out new ways of approaching situations that you find difficult, as well as suggesting new methods to help you cope and adjust better to life circumstances. ",
    }
    ,
    {
      summary: 'What does psychotherapy aim at?',
      description
        :
        "Psychotherapy	often	includes	psychological techniques	which	aim	at	increasing	theindividual's sense of his/her own well-being. Psychotherapists employ a range ofmethodsbased on experiential, relationship building, dialogue,communicationand behavior change that aredesignedto improve the mental health of a client,enhancementof positive self-image,confidenceand healthy grouprelationships.",
    }
    ,
    ,
    {
      summary: 'Who needs psychotherapy?',
      description
        :
        "Suffering because of emotionally distressing symptoms (such as depression, anxiety, phobias or self doubt) that interferes with normal functioning is a common reason for seeking psychotherapy. Some other common reasons for therapy include problems with persistent self defeating choices, behaviors and attitudes leading to personal dissatisfaction or relationship difficulties.",
    }
    ,
    {
      summary: 'What can I expect to achieve in Therapy?',
      description
        :
        "All psychiatric disorders/emotional are said to be the consequence of a combination of Biopsychosocialfactors.While, pharmacological treatment (medicines) take care of the neurochemical changes in the brain, psychotherapy is essential to take care of the psychological as well as the sociological contributors. So, if ,based on his/her analysis, your therapist advises you toseek psychotherapeutic help,it can prove reallybeneficial for you.",
    }
    ,
    {
      summary: 'Is psychotherapy important for me?',
      description
        :
        "All psychiatric disorders /emotional are said to be the consequence of a combination of Biopsychosocial factors. While,  pharmacological treatment (medicines) take care of the neurochemical changes in the brain, psychotherapy is essential to take care of the psychological as well as the sociological contributors. So, if ,based on his/her analysis, your therapist advises you to seek psychotherapeutic help, it can prove really beneficial for you.",
    }
    ,
    {
      summary: 'Will psychotherapy work for me?',
      description
        :
        "Research supports the assertions that therapy works for most clients. Many report relief from depression, anxiety, relationship problems, and issues affecting the elderly amongst numerous other issues. Several individuals also report seeking therapy as a means of personal growth and exploration. However, it is of important to note that effective therapy is dependent on the motivation of client to bring change, quality of relationship between the therapist and client and regularity in therapy sessions.",
    }
    ,
    {
      summary: 'If I go to therapy there must be something wrong with me; I should be able to handle this/ figure it out on my own, right?',
      description
        :
        "Making the decision to seek out therapy isn’t a sign of weakness; it’s a wise act of self-care to reach out for support from professionals when there is a challenge you need help with. For example, you would reach out to a doctor to help you set a broken bone. When it comes to your mental and emotional health it’s no different. Reaching out to professional support is a step in the direction of addressing the challenges you are facing. ",
    }
    ,
    {
      summary: 'Is what I share in therapy confidential?',
      description:`
      Confidentiality is one of the most important components in therapy, as successful therapy requires a high degree of trust. With few exceptions, the highly sensitive material that is discussed between you and your therapist will not be shared with anyone else without your permission. For example, your therapist may share information with someone on your treating team (your Psychiatrist, Nurse etc.) In addition, therapists are mandated to make certain disclosures in cases where there is suspicion of harm to oneself, harm to others, or child abuse. All such disclosures will be discussed with you in advance.
      `
    }
    ,
    {
      summary: `I tried therapy before and it didn't work, why should I try it again?`,
      description:`
      Sometimes the chemistry between the therapist and client or the therapeutic modality just isn't a good fit. Just as you sometimes have to switch medication, you may need to switch therapists or treatment modalities to achieve success. Therapy works best when you are open to it and are actually willing to participate in your own healing.
      `
    }
    ,
    {
      summary: 'How long does it take?',
      description:`
        Once making the difficult choice to seek help, one naturally hopes for rapid, transformative and permanent relief. It must be noted that the problems that bring us into therapy have usually been a long while in the making and, accordingly, cannot be expected to resolve immediately. With that said, the length of treatment does vary depending on the nature, severity, complexity and duration of the problems.
        In general, meaningful and lasting change requires a minimum of a few months. Within this period, however, noticeable relief from distressing symptoms is often experienced early on in the course, while a sense of having addressed the underlying issues follows to consolidate the earlier treatment gains.
      `
    }
    ,
    {
      summary: 'How frequently will I have to see my therapist and for how long?',
      description:
        "Frequency of the sessions depends upon the nature, severity of the illness and goals of the therapy.",
    }
    ,
    {
      summary: 'How long are therapy sessions?',
      description
        :
        "Sessions are typically between 45 minutes and 50 minutes, but may be shorter or longer depending upon the treatment approach.",
    }
    ,
    {
      summary: 'How much will therapy cost me?',
      description
        :
        "It depends on the nature of the therapy. Usually, each session approximately ranges from______. The payment can be made per session wise or cumulatively in form of package.",
    }
    ,
    {
      summary: 'Is it a painful or invasive treatment?',
      description
        :
        "No, since psychotherapy is a “talk therapy,” i.e. the solutions are found through discussions and talking through the matters utilizing specific psychotherapeutic techniques hence no painful or invasive procedures are involved.",
    }
    ,
    {
      summary: 'How does Depression affect Friends and Family?',
      description
        :
        `
        Living with a depressed person can be very difficult and stressful on family members and friends. The pain of watching a loved one suffer from depression can bring about feelings of helplessness and loss.

        Family or couples therapy may be beneficial in bringing together all the individuals affected by depression and helping them learn effective ways to cope together. This type of psychotherapy can also provide a good opportunity for individuals who have never experienced depression themselves to learn more about it and to identify constructive ways to support a loved one who is suffering from depression.

        The support and involvement of family and friends can play a crucial role in aiding someone who is depressed. Individuals in the "support system" can encourage a depressed loved one to stick with treatment and practice the coping techniques and problem-solving skills he or she is learning through psychotherapy.
        `,
    }
    ,
    {
      summary: 'Are there any side effects?',
      description
        :
        "Research indicates “No harmful or permanent side effects” with psychological therapies and methods.",
    }
    ,
  ]
};

const TabNames =[
  {name: 'General' , content: General},
  {name: 'Assessment' , content: Assessment},
  {name: 'Treatments' , content: Treatments},
  {name: 'Psychotherapy' , content: Psychotherapy},
];

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
`;

const FaqSection = styled.section`
    background-image: url(${SukoonBgLogo});
    background-position: top 0 left -18vw;
    background-size: 37vw;
    background-repeat: no-repeat;
}
`;

const Faqs = (props) => {
  const[ListContent, setContent] = useState(General);

  function handleView(content){
    // Content bellow the tab is changed by the next function.
    setContent(content);
  }

  return (
    <FaqSection id="faq-section" className="p-8 flex relative flex-row-reverse">
      <div className="w-4/5">
        <TabList className="flex mb-10 justify-between">
          {TabNames.map((tab)=>{
            return(
              <li className="mt-3">
                <Tab width={`14vw`} buttonClass={``} onClick={handleView} active={tab.name === ListContent.tab} argument={[tab.content]}>
                  {tab.name}
                </Tab>
              </li>
            )
          })
          }
        </TabList>
        {
          ListContent.Questions.map((item)=>{
            return(
              <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                  <Details summary={item.summary}>
                    <Para width="100%" padding="8px 0">
                      {item.description}
                    </Para>
                  </Details>
              </div>
            )
          })
        }
      </div>
      <div className="">
        <Title subHeading={`Learn`}  titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
        <Para width={`70%`}>Want to find out more about Sukoon? Or find out more about psychiatry, and mental health? The answers to these and more can be found below.
        </Para>
      </div>
    </FaqSection>
  )
};


function FaqsPage(props) {
  return (
    <>
      <Banner captionLight={`Know More`} captionBold={`Feel Better`}  HeaderImg={HeaderImg}/>
      <Faqs/>
    </>

  );
}

export default FaqsPage;
