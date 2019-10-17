<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/course/", name="course_")
 */
class CourseProjectController extends AbstractController
{
    /**
     * @Route("1/", name="1")
     */
    public function course1Action()
    {
        return $this->render('course-project/1.html.twig');
    }

    /**
     * @Route("2/", name="2")
     */
    public function course2Action()
    {
        return $this->render('course-project/2.html.twig');
    }

    /**
     * @Route("3/", name="3")
     */
    public function course3Action()
    {
        return $this->render('course-project/3.html.twig');
    }
}