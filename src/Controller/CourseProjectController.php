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
}